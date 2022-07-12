import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class FlightController {
  private double kilometersPerSecond;

  // param: time in seconds
  // returns: distance in kilometers
  double calculateDistance(double timeInSeconds) {
    return timeInSeconds * kilometersPerSecond;
  }

  // ...
}`;

const cleanCode = `class FlightController {
  private KilometerPerSecond currentSpeed;

  Kilometers calculateDistance(Seconds time) {
    return time * currentSpeed;
  }

  // ...
}`;

const comment = `Spezielle Klassen sind oft sicherer und aussagekräftiger als primitive Typen.`;

export const task8: ITask = {
  uuid: `c30806e0-c235-42d2-9090-0ec4dcdd4fb9`,
  name: `Calculate Distance`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `2, 4`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.IntroduceLocalExtension },
        { value: Refactoring.IntroduceParameterObject },
        { value: Refactoring.ExtractMethod },
        { value: Refactoring.ReplaceDataValueWithObject, isValid: true },
      ],
      lines: `2, 4-6`,
    },
  ],
};
