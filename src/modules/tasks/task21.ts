import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class HeartSensor {
  // ...

  Astronaut getAstronaut() {
    // ...
  }

  setHeartBeatRange(int range) {
    // ...
  }

  void printCurrentReading() {
    // ...
  }
}

class O2Sensor {
  // ...

  void printCurrentReading() {
    // ...
  }

  Astronaut getAstronaut() {
    // ...
  }

  // ...
}`;

const cleanCode = `abstract class HealthSensor {
  // ...

  Astronaut getAstronaut() {
    // ...
  }

  void printCurrentReading() {
    // ...
  }
}

class HeartSensor extends HealthSensor {
  setHeartBeatRange(int range) {
    // ...
  }
}

class O2Sensor extends HealthSensor {
  // ...
}`;

const comment = `Gemeinsame Methoden zweier verwandter Klassen können in eine (ggf. abstrakte) Superklasse extrahiert werden. Konzeptuelle Konsistenz sowie Substituierbarkeit sollten bedacht werden.`;

export const task21: ITask = {
  uuid: `29f0fab1-4455-4235-a6a5-12efd0f261f7`,
  name: `Health Sensors`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1-11, 13, 19`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractSuperclass, isValid: true },
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.InlineMethod },
        { value: Refactoring.ExtractMethod },
      ],
      lines: `4-6, 12-14, 20-22, 24-26`,
    },
  ],
};
