import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Sensor {
  Location getLocation() { /* ... */ }
  String getName() { /* ... */ }
  TemperatureReading getTemperatureReading() { /* ... */ }
}`;

const cleanCode = `class Sensor {
  Location getLocation() { /* ... */ }
  String getName() { /* ... */ }
}

class TemperatureSensor extends Sensor {
  TemperatureReading getTemperatureReading() { /* ... */ }
}`;

const comment = `Nicht alle Sensoren können die Temperatur messen. Daher sollte für einen Temperatur-Sensor eine eigene Subklasse erstellt werden.`;

export const task24: ITask = {
  uuid: `434b968d-99c2-44c5-8e11-213693b96c3a`,
  name: `What's the Temperature?`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `7`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ReplaceExceptionWithTest },
        { value: Refactoring.ExtractSubclass, isValid: true },
        { value: Refactoring.IntroduceLocalExtension },
        { value: Refactoring.InferType },
      ],
      lines: `4`,
    },
  ],
};
