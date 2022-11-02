import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class HeartRateMonitor {
  private int _currentPulse;

  int readPulse() {
    if (_currentPulse <= 0) {
      return -1;
    }
    return _currentPulse;
  }

  //...
}`;

const cleanCode = `class HeartRateMonitor {
  private int _currentPulse;

  int readPulse() throws HeartRateMonitorException {
    if (_currentPulse <= 0) {
      throw new HeartRateMonitorException();
    }
    return _currentPulse;
  }

  //...
}`;

const comment = `Eine klare Trennung von regulärem Ablauf und Fehlerbehandlung verbessert die Lesbarkeit und Wartbarkeit.`;

export const task9: ITask = {
  uuid: `e1136e14-7ec2-48cb-b476-1eb7abe68f8f`,
  name: `Read Pulse`,
  difficulty: Difficulty.Simple,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4, 6`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractInterface },
        { value: Refactoring.ReplaceErrorCodeWithException, isValid: true },
        { value: Refactoring.GuardClauses },
        { value: Refactoring.DecomposeConditional },
      ],
      lines: `6`,
    },
  ],
};
