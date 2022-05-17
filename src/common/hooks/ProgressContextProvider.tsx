import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useDidMount, useLocalstorageState, useWillUnmount } from 'rooks';
import {
  parseRequiredInt,
  parseRequiredString,
} from '@/common/utils/parseRequired';
import { allTasks, Category } from '@/modules/tasks';

const LOCAL_STORAGE_KEY = parseRequiredString(process.env.LOCAL_STORAGE_KEY);
const POINTS_FOR_VISITED = parseRequiredInt(process.env.POINTS_FOR_VISITED);
const POINTS_FOR_SOLVED = parseRequiredInt(process.env.POINTS_FOR_SOLVED);
const DELAY_FOR_VISITED = parseRequiredInt(process.env.DELAY_FOR_VISITED);

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
  getTaskPoints: (uuid: string) => number;
  getCategoryProgressPercentage: (category: Category) => number;
  setTaskProgress: (uuid: string, taskProgress: TaskProgress) => void;
  useVisitedTimer: (
    uuid: string,
    getTaskProgress: IProgressContext['getTaskProgress'],
  ) => void;
}

export const ProgressContext = createContext<IProgressContext>(
  {} as IProgressContext,
);

const calculatePoints = (taskProgress?: TaskProgress): number => {
  switch (taskProgress) {
    case TaskProgress.Visited:
      return POINTS_FOR_VISITED;
    case TaskProgress.Solved:
      return POINTS_FOR_SOLVED;
    default:
      return 0;
  }
};

const calculateTotalScore = (progress: ITaskProgressStorage[]) => {
  let score = 0;
  progress.forEach((taskProgressStorage) => {
    score = score + calculatePoints(taskProgressStorage.taskProgress);
  });
  return score;
};

const calculateCategoryProgressPercentage = (
  category: Category,
  progress: ITaskProgressStorage[],
) => {
  const tasksOfCategory = allTasks.filter((task) => task.category === category);

  if (tasksOfCategory.length === 0) {
    throw new Error(`No tasks found for category "${category}"`);
  }

  const progressOfCategory = progress.filter((progressState) =>
    tasksOfCategory.some((task) => task.uuid === progressState.uuid),
  );

  const maxPoints = tasksOfCategory.length * POINTS_FOR_SOLVED;
  const points = calculateTotalScore(progressOfCategory);

  return Math.round((100 * points) / maxPoints);
};

// callback methods wrapped with Reacts useCallback()
// see https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
export default function ProgressContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [progress, setProgress, clearLocalStorage] = useLocalstorageState<
    ITaskProgressStorage[]
  >(LOCAL_STORAGE_KEY, []);

  const resetProgress = useCallback(() => {
    setProgress([]);
    clearLocalStorage();
  }, [setProgress, clearLocalStorage]);

  const getTotalScore = useCallback(() => {
    return calculateTotalScore(progress);
  }, [progress]);

  const getTaskProgress = useCallback(
    (uuid: string): TaskProgress | undefined => {
      const taskProgressStorage = progress.find(
        (taskProgressStorage) => taskProgressStorage.uuid === uuid,
      );
      return taskProgressStorage?.taskProgress;
    },
    [progress],
  );

  const getTaskPoints = useCallback(
    (uuid: string) => {
      const taskProgress = getTaskProgress(uuid);
      return calculatePoints(taskProgress);
    },
    [getTaskProgress],
  );

  const getCategoryProgressPercentage = useCallback(
    (category: Category) => {
      return calculateCategoryProgressPercentage(category, progress);
    },
    [progress],
  );

  const setTaskProgress = useCallback(
    (uuid: string, taskProgress: TaskProgress) => {
      setProgress((previousProgress) => {
        const newProgress = previousProgress.filter(
          (taskProgressStorage) => taskProgressStorage?.uuid !== uuid,
        );
        newProgress.push({ uuid, taskProgress });
        return newProgress;
      });
    },
    [setProgress],
  );

  const useVisitedTimer = (
    uuid: string,
    getTaskProgress: IProgressContext['getTaskProgress'],
  ) => {
    const getTaskProgressRef = useRef(getTaskProgress);
    useEffect(() => {
      getTaskProgressRef.current = getTaskProgress;
    }, [getTaskProgress]);

    const timeoutForVisitedRef = useRef<ReturnType<typeof setTimeout>>();

    useDidMount(() => {
      timeoutForVisitedRef.current = setTimeout(() => {
        const taskProgressRef = getTaskProgressRef.current(uuid);
        if (taskProgressRef === undefined) {
          setTaskProgress(uuid, TaskProgress.Visited);
        }
      }, DELAY_FOR_VISITED * 1000);
    });

    useWillUnmount(() => {
      if (timeoutForVisitedRef.current) {
        clearTimeout(timeoutForVisitedRef.current);
      }
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        resetProgress,
        getTotalScore,
        getTaskProgress,
        getTaskPoints,
        getCategoryProgressPercentage,
        setTaskProgress,
        useVisitedTimer,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
