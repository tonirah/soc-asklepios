import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class SpeedController {
  private Velocity _currentSpeed;

  Velocity modifySpeed(Velocity speedChange) {
    // Speed cannot be negative
    if (_currentSpeed + speedChange < 0) {
      return -1;
    }
    _currentSpeed = _currentSpeed + speedChange;
    return _currentSpeed;
  }

  //...
}

// usage
result = speedController.modifySpeed(speedChange);
if (result === -1) {
  handleSpeedAnomaly();
}`;

const cleanCode = `class SpeedController {
  private Velocity _currentSpeed;

  boolean isValidSpeedChange(Velocity speedChange) {
    return _currentSpeed + speedChange < 0;
  }

  modifySpeed(Velocity speedChange) {
    assert isValidSpeedChange(speedChange) : "Speed cannot be negative";
    _currentSpeed = _currentSpeed + speedChange;
  }

  //...
}

// usage
if (speedController.isValidSpeedChange()) {
  speedController.modifySpeed(speedChange);
} else {
  handleSpeedAnomaly()
}`;

const comment = `Statt eines Fehlercodes im Rückgabewert kann eine Vorbedingung implementiert werden, welche an der aufrufenden Stelle sichergestellt werden muss.`;

export const task15: ITask = {
  uuid: `5cfe1cd7-b5e3-4b35-bf15-77904cae97db`,
  name: `Modify Velocity`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4-6, 9, 17`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ReplaceExceptionWithPrecondition, isValid: true },
        { value: Refactoring.Rename },
        { value: Refactoring.PullUpFieldMethod },
        { value: Refactoring.ExtractMethod },
      ],
      lines: `5, 7, 18`,
    },
  ],
};
