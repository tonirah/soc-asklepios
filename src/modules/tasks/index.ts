import { ITask } from '@/modules/tasks/definitions';
import { task0 } from '@/modules/tasks/task0';
import { task1 } from '@/modules/tasks/task1';
import { task2 } from '@/modules/tasks/task2';

export * from './definitions';
export const allTasks: ITask[] = [task0, task1, task2];
