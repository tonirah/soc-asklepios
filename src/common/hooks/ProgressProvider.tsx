import { createContext, ReactNode } from 'react';
import { useLocalstorageState } from 'rooks';

const LOCAL_STORAGE_KEY = process.env.LOCAL_STORAGE_KEY ?? `soc-progress`;

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
  getTaskProgress: (uuid: string) => TaskProgress | undefined;
  setTaskProgress: (uuid: string, taskProgress: TaskProgress) => void;
}

export const ProgressContext = createContext<IProgressContext>(
  {} as IProgressContext,
);

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

  const getTaskProgress = (uuid: string) => {
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

  return (
    <ProgressContext.Provider
      value={{
        resetProgress,
        getTaskProgress,
        setTaskProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
