import { ITask } from '@/modules/tasks/definitions';
import { task0 } from '@/modules/tasks/task0';
import { task1 } from '@/modules/tasks/task1';
import { task2 } from '@/modules/tasks/task2';
import { task3 } from '@/modules/tasks/task3';
import { task4 } from '@/modules/tasks/task4';
import { task5 } from '@/modules/tasks/task5';
import { task6 } from '@/modules/tasks/task6';
import { task7 } from '@/modules/tasks/task7';
import { task8 } from '@/modules/tasks/task8';
import { task9 } from '@/modules/tasks/task9';
import { task10 } from '@/modules/tasks/task10';
import { task11 } from '@/modules/tasks/task11';
import { task12 } from '@/modules/tasks/task12';
import { task13 } from '@/modules/tasks/task13';
import { task14 } from '@/modules/tasks/task14';
import { task15 } from '@/modules/tasks/task15';
import { task16 } from '@/modules/tasks/task16';
import { task17 } from '@/modules/tasks/task17';
import { task18 } from '@/modules/tasks/task18';
import { task19 } from '@/modules/tasks/task19';
import { task20 } from '@/modules/tasks/task20';

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
  task8,
  task9,
  task10,
  task11,
  task12,
  task13,
  task14,
  task15,
  task16,
  task17,
  task18,
  task19,
  task20,
].sort(compareDifficultyAndName);

export * from './definitions';
