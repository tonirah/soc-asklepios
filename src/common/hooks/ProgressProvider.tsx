import { createContext, ReactNode } from 'react';
import { useLocalstorageState } from 'rooks';

const LOCAL_STORAGE_KEY = process.env.LOCAL_STORAGE_KEY ?? `soc-progress`;

export enum ProgressState {
  Visited = `Visited`,
  Solved = `Solved`,
}

interface ITaskProgress {
  uuid: string;
  progressState: ProgressState;
}

interface IProgressContext {
  getProgress: () => (ITaskProgress | undefined)[];
  resetProgress: () => void;
  getTaskProgress: (uuid: string) => ProgressState | undefined;
  setTaskProgress: (uuid: string, progressState: ProgressState) => void;
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
    (ITaskProgress | undefined)[]
  >(LOCAL_STORAGE_KEY, []);

  const getProgress = () => progress;

  const resetProgress = () => {
    setProgress([]);
    clearLocalStorage();
  };

  const getTaskProgress = (uuid: string) => {
    const taskProgress = progress.find(
      (taskProgress) => taskProgress?.uuid === uuid,
    );
    return taskProgress?.progressState;
  };

  const setTaskProgress = (uuid: string, progressState: ProgressState) => {
    setProgress((previousProgress) => {
      const newProgress = previousProgress.filter(
        (taskProgress) => taskProgress?.uuid !== uuid,
      );
      newProgress.push({ uuid, progressState });
      return newProgress;
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        getProgress,
        resetProgress,
        getTaskProgress,
        setTaskProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
