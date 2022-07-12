import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class SpaceMonitor {
// ...

  Distance getDistToNrLrgObj() {
    // ...
    return distance;
  }

  void avoidOtherSpaceships() {
    // ...
  }
}`;

const cleanCode = `class SpaceMonitor {
// ...

  Distance getDistanceToNearestLargeObject() {
    // ...
    return distance;
  }

  void avoidOtherSpaceships() {
    // ...
  }
}`;

const comment = `Abkürzungen sind selbst für die Autorin von Code nach kurzer Zeit nicht mehr verständlich. Die Lesbarkeit von Programmen sollte nicht etwas kürzeren Zeilen geopfert werden.`;

export const task5: ITask = {
  uuid: `00e95a5d-1b15-4ccd-b5c2-94e78b90f4b0`,
  name: `Nearest large Object`,
  difficulty: Difficulty.Simple,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.MoveMethod },
        { value: Refactoring.Rename, isValid: true },
        { value: Refactoring.ChangeValueToReference },
        { value: Refactoring.RemoveMiddleMan },
      ],
      lines: `4`,
    },
  ],
};
