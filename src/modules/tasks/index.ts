import { ITask } from '@/modules/tasks/definitions';
import { task0 } from '@/modules/tasks/task0';
import { task1 } from '@/modules/tasks/task1';
import { task2 } from '@/modules/tasks/task2';
import { task3 } from '@/modules/tasks/task3';
import { task4 } from '@/modules/tasks/task4';
import { task5 } from '@/modules/tasks/task5';
import { task6 } from '@/modules/tasks/task6';
import { task7 } from '@/modules/tasks/task7';

const compareDifficultyAndName = (a: ITask, b: ITask) => {
  if (a.difficulty < b.difficulty) {
    return -1;
  }
  if (a.difficulty > b.difficulty) {
    return 1;
  }
  return a.name.localeCompare(b.name);
};

export const allTasks: ITask[] = [
  task0,
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
].sort(compareDifficultyAndName);

export * from './definitions';
