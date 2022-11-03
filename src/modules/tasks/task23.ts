import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Astronaut {
  String getName() { /* ... */ }
  String getFieldOfStudy { /* ... */ }

  // ...
}

class Mechanic extends Astronaut { /* ... */ }

class Scientist extends Astronaut { /* ... */ }`;

const cleanCode = `class Astronaut {
  String getName() { /* ... */ }
  // ...
}

class Mechanic extends Astronaut { /* ... */ }

class Scientist extends Astronaut {
  String getFieldOfStudy { /* ... */ }

  // ...
}`;

const comment = `Die Methode getFieldOfStudy() betrifft nur die Klasse Scientist und sollte daher aus der gemeinsamen Superklasse heraus dort hin gezogen werden.`;

export const task23: ITask = {
  uuid: `1a9d169c-1b87-4087-89bd-0df1baded069`,
  name: `Scientist vs. Mechanic`,
  difficulty: Difficulty.Simple,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `9`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.PushDownFieldMethod, isValid: true },
        { value: Refactoring.GuardClauses },
        { value: Refactoring.ExtractInterface },
        { value: Refactoring.ReplaceErrorCodeWithException },
      ],
      lines: `3`,
    },
  ],
};
