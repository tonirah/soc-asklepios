export interface ITask {
  title: string;
}

const task1: ITask = {
  title: `task1`,
};

const task2: ITask = {
  title: `task2`,
};

export const allTasks: ITask[] = [task1, task2];
