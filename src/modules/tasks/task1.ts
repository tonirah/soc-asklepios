import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

export const task1: ITask = {
  uuid: `bf8bb3be-bd1a-4380-8d5b-87270cb58f7c`,
  name: `Aufgabe #2`,
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
        { value: Refactoring.ExtractMethod, isValid: true },
      ],
      lines: `1`,
    },
  ],
};
