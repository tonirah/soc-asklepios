import {
  Category,
  CodeSmell,
  Difficulty,
  ITask,
  Refactoring,
} from '@/tasks/common';

export const task0: ITask = {
  title: `Aufgabe #1`,
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

  comment: `**Dummy-Kommentar**. Mehr Infos unter [react-markdown](https://github.com/remarkjs/react-markdown).`,

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
