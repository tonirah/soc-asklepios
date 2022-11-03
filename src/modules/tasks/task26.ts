import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Observation {
  Distance calculateDistance() {
    Measurement measurement1;
    Measurement measurement2;
    Measurement measurement3;

    // long computation...
  }

  // ...
}`;

const cleanCode = `class Observation {
  Distance calculateDistance() {
    return new DistanceCalculator(this).calculate();
  }

  // ...
}

class DistanceCalculator {
  private Measurement measurement1;
  private Measurement measurement2;
  private Measurement measurement3;

  DistanceCalculator(Observation observation) {
    // setup...
  }

  Distance calculate() {
    // calculation...
  }
}`;

const comment = `Die komplexe Berechnung der Methode calculateDistance() kann in eine eigene Klasse extrahiert werden.`;

export const task26: ITask = {
  uuid: `1466ef69-4bce-4518-9d81-df0274d7e38f`,
  name: `Distance Calculation is Hard`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `3, 9-21`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.ReplaceMethodWithMethodObject, isValid: true },
        { value: Refactoring.InlineMethod },
        { value: Refactoring.ConditionalPolymorphism },
      ],
      lines: `3-7`,
    },
  ],
};
