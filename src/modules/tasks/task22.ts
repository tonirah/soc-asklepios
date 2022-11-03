import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Astronaut { /* ... */ }

class Engineer extends Astronaut {
  String getName() { /* ... */ }

  // ...
}

class Scientist extends Astronaut {
  String getName() { /* ... */ }

  // ...
}`;

const cleanCode = `class Astronaut {
  String getName() { /* ... */ }

  // ...
}

class Engineer extends Astronaut { /* ... */ }

class Scientist extends Astronaut { /* ... */ }`;

const comment = `Die auch semantisch gleiche Methode getName() kann in die gemeinsame Superklasse übernommen werden.`;

export const task22: ITask = {
  uuid: `2202cb57-b9f0-46f4-b3ca-fb1fb200927f`,
  name: `Organize Astronaut Staff`,
  difficulty: Difficulty.Simple,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `2, 7, 9`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.RemoveMiddleMan },
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.PullUpFieldMethod, isValid: true },
        { value: Refactoring.GuardClauses },
      ],
      lines: `4, 10`,
    },
  ],
};
