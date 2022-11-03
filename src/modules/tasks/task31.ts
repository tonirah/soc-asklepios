import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class RadiationWarning {
  Date start;
  Hours duration;

  void logWarning() {
    // date method
    long HOUR_IN_MS = 3600 * 1000;
    Date end = new Date(start.getTime() + duration * HOUR_IN_MS);

    // warning
    System.out.println("RadiationWarning issued at " + start + ", valid until "
                       + end + " (" + duration + " hours).");
  }
}`;

const cleanCode = `class RadiationWarning {
  SOCDate start;
  Hours duration;

  void logWarning() {
    SOCDate end = start.addHours(duration);
    System.out.println("RadiationWarning issued at " + start + ", valid until "
            + end + " (" + duration + " hours).");
  }
}

class SOCDate extends Date {
  long HOUR_IN_MS = 3600 * 1000;

  SOCDate addHours(Hours hours) {
    return new SOCDate(this.getTime() + hours * HOUR_IN_MS);
  }
}`;

const comment = `Da Date direkt nicht verändert werden kann, wird .`;

export const task31: ITask = {
  uuid: `3ddf40a8-3da2-4a67-aa9b-38f9a07606a6`,
  name: `Date Calculations`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `6, 12-18`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.EncapsulateField },
        {
          value: Refactoring.IntroduceLocalExtension,
          isValid: true,
        },
        { value: Refactoring.ConditionalPolymorphism },
        { value: Refactoring.ExtractSubclass },
      ],
      lines: `6-10`,
    },
  ],
};
