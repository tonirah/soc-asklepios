import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class RadiationSensor {
  // ...
  public Radiation getCurrentRadiation(RadiationType type) {
    switch (type) {
      case PROTON:
        return this.getProton();
      case POSITRON:
        return this.getPositron();
      case ALPHA:
      default:
        return this.getAlpha();
    }
  }
}

// usage
radiation = radiationSensor.getCurrentRadiation(RadiationType.PROTON);`;

const cleanCode = `abstract class RadiationSensor {
  // ...
  abstract public Radiation getCurrentRadiation();
}

class ProtonRadiationSensor extends RadiationSensor {
  public Radiation getCurrentRadiation() {
    return this.getProton();
  }
}

class PositronRadiationSensor extends RadiationSensor {
  public Radiation getCurrentRadiation() {
    return this.getPositron();
  }
}

class AlphaRadiationSensor extends RadiationSensor {
  public Radiation getCurrentRadiation() {
    return this.getAlpha();
  }
}

// usage
radiation = radiationSensor.getCurrentRadiation();`;

const comment = `Diese Typunterscheidung lässt sich gut durch Polymorphismus umsetzen, einem zentralen Konzept der objektorientierten Programmierung.`;

export const task3: ITask = {
  uuid: `7dfdbbbe-4b04-46e5-9ea0-804e74e1b5df`,
  name: `Monitor space radiation`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1-4, 6-10, 12-16, 18-22, 24-25`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.GuardClauses },
        { value: Refactoring.ConditionalPolymorphism, isValid: true },
      ],
      lines: `1-14, 16-17`,
    },
  ],
};
