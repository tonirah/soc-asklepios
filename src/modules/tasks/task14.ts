import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Monitor {
  // ...

  public Monitor (int type) {
    _type = type;
  }
}

// usage
Monitor monitor1 = new Monitor(context.monitorType);`;

const cleanCode = `abstract class Monitor {
  // ...

  static Monitor create(int type) {
    switch (type) {
      case 1:
        return new HeartRateMonitor();
      case 2:
      default:
        return new O2Monitor();
    }
  }
}

// usage
Monitor monitor1 = Monitor.create(context.monitorType);`;

const comment = `Durch die Factorymethode \`Monitor.create()\` kann der Typ der neuen Instanz dynamisch gesetzt werden.`;

export const task14: ITask = {
  uuid: `cfc72f6f-e620-4409-89c7-26fc2fd77593`,
  name: `Various Health Monitors`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1, 4-11, 16`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.GuardClauses },
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.DecomposeConditional },
        {
          value: Refactoring.ReplaceConstructorWithFactoryMethod,
          isValid: true,
        },
      ],
      lines: `4-6, 10`,
    },
  ],
};
