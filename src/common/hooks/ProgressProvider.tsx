import { createContext, ReactNode } from 'react';
import { useLocalstorageState } from 'rooks';
import {
  parseRequiredInt,
  parseRequiredString,
} from '@/common/utils/parseRequired';

const LOCAL_STORAGE_KEY = parseRequiredString(process.env.LOCAL_STORAGE_KEY);
const POINTS_FOR_VISITED = parseRequiredInt(process.env.POINTS_FOR_VISITED);
const POINTS_FOR_SOLVED = parseRequiredInt(process.env.POINTS_FOR_SOLVED);

export enum TaskProgress {
  Visited = `Visited`,
  Solved = `Solved`,
}

interface ITaskProgressStorage {
  uuid: string;
  taskProgress: TaskProgress;
}

interface IProgressContext {
  resetProgress: () => void;
  getTotalScore: () => number;
  getTaskProgress: (uuid: string) => TaskProgress | undefined;
  setTaskProgress: (uuid: string, taskProgress: TaskProgress) => void;
  getTaskPoints: (uuid: string) => number;
}

export const ProgressContext = createContext<IProgressContext>(
  {} as IProgressContext,
);

function calculatePoints(taskProgress?: TaskProgress): number {
  switch (taskProgress) {
    case TaskProgress.Visited:
      return POINTS_FOR_VISITED;
    case TaskProgress.Solved:
      return POINTS_FOR_SOLVED;
    default:
      return 0;
  }
}

// https://stackoverflow.com/a/51573816
// more sophisticated: https://www.basefactor.com/global-state-with-react
export default function ProgressProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [progress, setProgress, clearLocalStorage] = useLocalstorageState<
    (ITaskProgressStorage | undefined)[]
  >(LOCAL_STORAGE_KEY, []);

  const resetProgress = () => {
    setProgress([]);
    clearLocalStorage();
  };

  const getTotalScore = () => {
    let score = 0;
    progress.map((taskProgressStorage) => {
      score = score + calculatePoints(taskProgressStorage?.taskProgress);
    });
    return score;
  };

  const getTaskProgress = (uuid: string): TaskProgress | undefined => {
    const taskProgressStorage = progress.find(
      (taskProgressStorage) => taskProgressStorage?.uuid === uuid,
    );
    return taskProgressStorage?.taskProgress;
  };

  const setTaskProgress = (uuid: string, taskProgress: TaskProgress) => {
    setProgress((previousProgress) => {
      const newProgress = previousProgress.filter(
        (taskProgressStorage) => taskProgressStorage?.uuid !== uuid,
      );
      newProgress.push({ uuid, taskProgress });
      return newProgress;
    });
  };

  const getTaskPoints = (uuid: string) => {
    const taskProgress = getTaskProgress(uuid);
    return calculatePoints(taskProgress);
  };

  return (
    <ProgressContext.Provider
      value={{
        resetProgress,
        getTotalScore,
        getTaskProgress,
        setTaskProgress,
        getTaskPoints,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
