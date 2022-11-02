import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `// ...
  public O2LevelStatus getO2LevelStatus(OxygenSensorData  levelOfOxygen) {
    O2LevelStatus status;
    if (levelOfOxygen < this.lowerLimit) {
      status = O2LevelStatus.TOO_LOW;
    } else if (levelOfOxygen > this.upperLimit) {
      status = O2LevelStatus.TOO_HIGH;
    } else {
      status = O2LevelStatus.RIGHT_AMOUNT;
    }
    return status;
  }
// ...`;

const cleanCode = `// ...
  public O2LevelStatus getO2LevelStatus(OxygenSensorData  levelOfOxygen) {
    if (levelOfOxygen < this.lowerLimit) {
      return O2LevelStatus.TOO_LOW;
    }
    if (levelOfOxygen > this.upperLimit) {
      return O2LevelStatus.TOO_HIGH;
    }
    return O2LevelStatus.RIGHT_AMOUNT;
  }
// ...`;

const comment = `Durch Guard Clauses kann die Lesbarkeit in diesem Fall deutlich verbessert werden.`;

export const task1: ITask = {
  uuid: `bf8bb3be-bd1a-4380-8d5b-87270cb58f7c`,
  name: `O2 Level Status`,
  difficulty: Difficulty.Simple,
  showAllOptions: true,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `3-9`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.ExtractMethod },
        { value: Refactoring.GuardClauses, isValid: true },
      ],
      lines: `4-10`,
    },
  ],
};
