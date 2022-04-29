enum Category {
  Category1 = `Category 1`,
}

enum Difficulty {
  Simple,
  Medium,
  Hard,
}

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
  title: string;
  difficulty: Difficulty;
  category: Category;
  dirtyCode: string;
  cleanCode: string;
  cleanCodeHighlightedLines: string;
  comment: string;
  inputs: IInput[];
}

const task1: ITask = {
  title: `task1`,
  difficulty: Difficulty.Simple,
  category: Category.Category1,
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
  cleanCodeHighlightedLines: `1`,
  comment: `**Dummy comment**. For more info, see [react-markdown](https://github.com/remarkjs/react-markdown).`,
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
  difficulty: Difficulty.Simple,
  category: Category.Category1,
  dirtyCode: `function helloWorld() { return 'hello, world'; }`,
  cleanCode: `function helloWorld() { return 'hello, world'; }`,
  cleanCodeHighlightedLines: `1`,
  comment: `**Dummy comment**. For more info, see [react-markdown](https://github.com/remarkjs/react-markdown).`,
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
