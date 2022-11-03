import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Astronaut {
  private Location location;

  String printFullLocation() {
    System.out.println("Room: " + location.room + ", bed: " + location.bed);
  }

  // ...
}

class Location {
  Room room;
  Bed bed;

  // ...
}`;

const cleanCode = `class Astronaut {
  private Location location;

  // ...
}

class Location {
  private Room room;
  private Bed bed;

  String printFullLocation() {
    System.out.println("Room: " + location.room + ", bed: " + location.bed);
  }

  // ...
}`;

const comment = `Die Methode printFullLocation() verwendet hauptsächlich Felder der Klasse Location und sollte dorthin verschoben werden.`;

export const task27: ITask = {
  uuid: `2b0bcb90-8c5c-43e7-bbab-0d048c72380d`,
  name: `Astronaut Localization`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `8, 9, 11-13`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.GuardClauses },
        { value: Refactoring.ExtractMethod },
        { value: Refactoring.MoveFieldMethod, isValid: true },
      ],
      lines: `4-6, 12, 13`,
    },
  ],
};
