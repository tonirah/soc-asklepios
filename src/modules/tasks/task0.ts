import {
  Category,
  CodeSmell,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

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
      type: InputType.CodeSmell,
      options: [
        { value: CodeSmell.LongMethod },
        { value: CodeSmell.Comment, isValid: true },
      ],
      lines: `1-2,4`,
    },
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
