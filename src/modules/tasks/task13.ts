import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Instrument {
  private InstrumentPanel panel;
  private Radiation radiationLimit = null;

  // either radiationLimit or panel.radiationLimit should be set
  public Radiation getRadiationLimit() {
    if (this.radiationLimit != null) {
      return this.radiationLimit;
    }
    return panel.radiationLimit;
  }
}`;

const cleanCode = `class Instrument {
  private InstrumentPanel panel;
  private Radiation radiationLimit = null;

  public Radiation getRadiationLimit() {
    assert (this.radiationLimit != null || panel.radiationLimit != null);
    if (this.radiationLimit != null) {
      return this.radiationLimit;
    }
    return panel.radiationLimit;
  }
}`;

const comment = `Die im Kommentar enthaltene Voraussetzung lässt sich ideal mit einer Assertion ausdrücken.`;

export const task13: ITask = {
  uuid: `4b2c369f-572b-43ed-bcaf-9e319a1b920a`,
  name: `Radiation Limit`,
  difficulty: Difficulty.Simple,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `6`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ReplaceExceptionWithPrecondition },
        { value: Refactoring.IntroduceAssertion, isValid: true },
        { value: Refactoring.ExtractInterface },
        { value: Refactoring.ReplaceSubclassWithFields },
      ],
      lines: `5`,
    },
  ],
};
