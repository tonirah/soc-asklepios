import { task0 } from '@/modules/tasks/task0';
import { task1 } from '@/modules/tasks/task1';
import { ITask } from '@/modules/tasks/common';

export type { ITask };

export const allTasks: ITask[] = [task0, task1];
