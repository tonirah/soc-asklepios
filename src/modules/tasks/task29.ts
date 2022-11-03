import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Engine {
  private FuelTank fuelTank;

  Liter getFuelLevel() {
    return fuelTank.getLevel();
  };

  // ...
}

// usage
Liter fillLevel = engine.getFuelLevel();`;

const cleanCode = `class Engine {
  private FuelTank fuelTank;

  FuelTank getFuelTank() {
    return fuelTank;
  };

  // ...
}

// usage
Liter fuelLevel = engine.getFuelTank().getLevel();`;

const comment = `Mit dem Remove Middleman Refactoring können verkettete Aufrufe explizit gemacht werden.`;

export const task29: ITask = {
  uuid: `d034d999-b5c4-4aff-ad20-ec69dfad6dcc`,
  name: `I thought the Tank is full...`,
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
        { value: Refactoring.ExtractInterface },
        { value: Refactoring.RemoveMiddleMan, isValid: true },
        { value: Refactoring.IntroduceAssertion },
      ],
      lines: `4-6, 12`,
    },
  ],
};
