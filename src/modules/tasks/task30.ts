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
  Date start;
  Hours duration;

  void logWarning() {
    Date end = RadiationWarning.addHours(start, duration);
    System.out.println("RadiationWarning issued at " + start + ", valid until "
                       + end + " (" + duration + " hours).");
  }

  // date method
  private static Date addHours(Date date, Hours hours) {
    long HOUR_IN_MS = 3600 * 1000;
    return new Date(date.getTime() + hours * HOUR_IN_MS);
  }
}`;

const comment = `Da Date direkt nicht verändert werden kann, wird der Klasse RadiationWarning eine benötigte klassenfremde Methode hinzugefügt.`;

export const task30: ITask = {
  uuid: `a87974c0-84e8-46e0-8ad3-a3ec065d2fdb`,
  name: `When is the Radiation Warning over?`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `6, 11-15`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ReplaceConstructorWithFactoryMethod },
        { value: Refactoring.DecomposeConditional },
        {
          value: Refactoring.IntroduceForeignMethod,
          isValid: true,
        },
        { value: Refactoring.MoveFieldMethod },
      ],
      lines: `6-10`,
    },
  ],
};
