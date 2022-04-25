enum Refactoring {
  ExtractClass = `Extract Class`,
  MoveMethod = `Move Method`,
  ExtractMethod = `Extract Method`,
}

enum CodeSmell {
  Comment = `Comment`,
  LongMethod = `Long Method`,
  LongParameterList = `Long Parameter List`,
}

interface IOption<Type> {
  value: Type;
  correct?: boolean;
}

interface IInput {
  options: IOption<Refactoring>[] | IOption<CodeSmell>[];
}

export interface ITask {
  title: string;
  inputs: IInput[];
}

const task1: ITask = {
  title: `task1`,
  inputs: [
    {
      options: [{ value: CodeSmell.LongMethod }, { value: CodeSmell.Comment }],
    },
    {
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ExtractMethod, correct: true },
      ],
    },
  ],
};

const task2: ITask = {
  title: `task2`,
  inputs: [
    {
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ExtractMethod, correct: true },
      ],
    },
  ],
};

export const allTasks: ITask[] = [task1, task2];
