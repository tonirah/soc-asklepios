import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Sensor {
  // ...

  public void logReading() {
    System.out.println(this._currentReading);
  }
}

// usage
Sensor mySensor = context.sensor;
if (mySensor == null) {
  System.out.println("No reading available, because no Sensor is attached.");
} else {
  mySensor.logReading();
}`;

const cleanCode = `class Sensor {
  // ...

  public void logReading() {
    System.out.println(this._currentReading);
  }
}

class NullSensor extends Sensor {
  // ...

  public void logReading() {
    System.out.println("No reading available, because no Sensor is attached.");
  }
}

// usage
Sensor mySensor = context.sensor;
mySensor.logReading();`;

const comment = `Durch die Einführung eines NullSensors wird die Nutzung vereinfacht. Die Komplexität wird an eine zentrale interne Stelle verschoben.`;

export const task12: ITask = {
  uuid: `24c176b2-9c91-4ddf-aa0c-16570321ccf6`,
  name: `Where's my Sensor?`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `9-15, 18, 19`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.HideDelegate },
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.ExtractInterface },
        { value: Refactoring.IntroduceNullObject, isValid: true },
      ],
      lines: `11-15`,
    },
  ],
};
