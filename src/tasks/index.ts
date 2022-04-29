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
  lines: string;
}

export interface ITask {
  dirtyCode: string;
  cleanCode: string;
  title: string;
  inputs: IInput[];
}

const task1: ITask = {
  title: `task1`,
  dirtyCode: `
  function helloWorld() {
    return 'hello, world';
  }
  `,
  cleanCode: `
  function helloWorld() {
    return 'hello, world';
  }
  `,
  inputs: [
    {
      options: [
        { value: CodeSmell.LongMethod },
        { value: CodeSmell.Comment, correct: true },
      ],
      lines: `1-2,4`,
    },
    {
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ExtractMethod, correct: true },
      ],
      lines: `1`,
    },
  ],
};

const task2: ITask = {
  title: `task2`,
  dirtyCode: `function helloWorld() { return 'hello, world'; }`,
  cleanCode: `function helloWorld() { return 'hello, world'; }`,
  inputs: [
    {
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ExtractMethod, correct: true },
      ],
      lines: `1`,
    },
  ],
};

export const allTasks: ITask[] = [task1, task2];
