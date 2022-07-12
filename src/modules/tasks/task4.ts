import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class AstronautHealth {
  private int _numberOfMyocardialInfarctions;
  //  ...

  HealthCondition getHealthCondition() {
    if (this.hadMoreThenTwoMyocardialInfarctions()) {
      return HealthCondition.Bad;
    }
    return HealthCondition.Good;
  }

  private boolean hadMoreThenTwoMyocardialInfarctions() {
    return this._numberOfMyocardialInfarctions > 2;
  }
}`;

const cleanCode = `class AstronautHealth {
  private int _numberOfMyocardialInfarctions;
  //  ...

  HealthCondition getHealthCondition() {
    if (this._numberOfMyocardialInfarctions > 2) {
      return HealthCondition.Bad;
    }
    return HealthCondition.Good;
  }
}`;

const comment = `Die Methode hadMoreThenTwoMyocardialInfarctions() ist nicht besser lesbar als deren Implementierung.`;

export const task4: ITask = {
  uuid: `4a41a759-9e4a-411d-8ada-04fed7181aae`,
  name: `Astronaut Health Condition`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `6`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.DecomposeConditional },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.ConditionalPolymorphism },
        { value: Refactoring.InlineMethod, isValid: true },
      ],
      lines: `6, 12-14`,
    },
  ],
};
