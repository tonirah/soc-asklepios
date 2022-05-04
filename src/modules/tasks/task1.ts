import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from '@/modules/tasks/common';

export const task1: ITask = {
  title: `Aufgabe #2`,
  difficulty: Difficulty.Simple,
  category: Category.Category1,

  dirtyCode: `function helloWorld() { return 'hello, world'; }`,

  cleanCode: `function helloWorld() { return 'hello, world'; }`,
  cleanCodeHighlightedLines: `1`,

  comment: `**Dummy-Kommentar**. Mehr Infos unter [react-markdown](https://github.com/remarkjs/react-markdown).`,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ExtractMethod, correct: true },
      ],
      lines: `1`,
    },
  ],
};
