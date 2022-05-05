import { createContext, ReactNode } from 'react';
import { useLocalstorageState } from 'rooks';

const LOCAL_STORAGE_KEY = `soc-progress`;

export enum TaskProgress {
  Visited = `Visited`,
  Solved = `Solved`,
}

interface IProgressContext {
  getProgress: () => (TaskProgress | undefined)[];
  setTaskProgress: (index: number, taskProgress?: TaskProgress) => void;
  resetProgress: () => void;
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
  const [progress, setProgress] = useLocalstorageState<
    (TaskProgress | undefined)[]
  >(LOCAL_STORAGE_KEY, []);

  const getProgress = () => progress;

  const setTaskProgress = (index: number, taskProgress?: TaskProgress) => {
    setProgress((previousProgress) => {
      const newProgress = [...previousProgress];
      newProgress[index] = taskProgress;
      return newProgress;
    });
  };

  const resetProgress = () => setProgress([]);

  return (
    <ProgressContext.Provider
      value={{
        getProgress,
        setTaskProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
