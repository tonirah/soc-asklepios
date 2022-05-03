import { Category, Difficulty, ITask, Refactoring } from '@/tasks/common';

export const task1: ITask = {
  title: `task1`,
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
