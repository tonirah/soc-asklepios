import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class RadiationSensor {
  // ...

  void logProtonHistory(Date start, Date end) {
    // ...
  }

  void logPositronHistory(Date start, Date end) {
    // ...
  }

  void logAlphaHistory(Date start, Date end) {
    // ...
  }
}`;

const cleanCode = `class DateRange {
  Date start;
  Date end;
  // ...
}

class RadiationSensor {
  // ...

  void logProtonHistory(DateRange dateRange) {
    // ...
  }

  void logPositronHistory(DateRange dateRange) {
    // ...
  }

  void logAlphaHistory(DateRange dateRange) {
    // ...
  }
}`;

const comment = `Eine Parameterklasse eignet sich bei Methoden mit vielen zusammengehörenden Parametern, sowie bei mehreren Methoden mit gleichen Parametern.`;

export const task7: ITask = {
  uuid: `4250d029-0af1-4929-9847-c778168020ce`,
  name: `Log Radiation History`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1-5, 10, 14, 18`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.IntroduceParameterObject, isValid: true },
        { value: Refactoring.ExtractMethod },
        { value: Refactoring.ExtractInterface },
      ],
      lines: `4, 8, 12`,
    },
  ],
};
