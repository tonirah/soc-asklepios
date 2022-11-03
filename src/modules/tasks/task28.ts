import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Engine {
  private FuelTank fuelTank;

  FuelTank getFuelTank() {
    return fuelTank;
  };

  // ...
}

// usage
fuelLevel = engine.getFuelTank().getLevel();`;

const cleanCode = `class Engine {
  private FuelTank fuelTank;

  Liter getFuelLevel() {
    return fuelTank.getLevel();
  };

  // ...
}

// usage
fillLevel = engine.getFuelLevel();`;

const comment = `Der verkettete Methodenaufruf verletzt das Gesetz Demeters. Mit dem Hide Delegate Refactoring kann dies vermieden werden.`;

export const task28: ITask = {
  uuid: `9b147192-363c-4dd9-8dcc-4dc90552da73`,
  name: `Do we have enough Fuel?`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4-6, 12`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.BidirectionalAssociation },
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.HideDelegate, isValid: true },
      ],
      lines: `4-6, 12`,
    },
  ],
};
