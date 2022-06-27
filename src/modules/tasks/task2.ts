import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class AstronautHealth {
  // ...

  public updateSleepDuration(){
    if (
      this.sensorData.glycaemia < AstronautHealth.MIN_GLYCAEMIA
      || this.sensorData.glycaemia > AstronautHealth.MAX_GLYCAEMIA
      || this.sensorData.SpO2 < AstronautHealth.MIN_SP02
      || this.sensorData.SpO2 > AstronautHealth.MAX_SP02
    ) {
      this.sleepDuration = AstronautHealth.BASIC_SLEEP_DURATION
        + 0.5 * (Math.abs(this.sensorData.glycaemia - AstronautHealth.IDEAL_GLYCAEMIA))
        + 0.3 * (Math.abs(this.sensorData.SpO2 - AstronautHealth.IDEAL_SP02));
    } else {
      this.sleepDuration = AstronautHealth.BASIC_SLEEP_DURATION;
    }
  }
}`;

const cleanCode = `class AstronautHealth {
  // ...

  private boolean hasCriticalHealthCondition() {
    return (
      this.sensorData.glycaemia < AstronautHealth.MIN_GLYCAEMIA
      || this.sensorData.glycaemia > AstronautHealth.MAX_GLYCAEMIA
      || this.sensorData.SpO2 < AstronautHealth.MIN_SP02
      || this.sensorData.SpO2 > AstronautHealth.MAX_SP02
    );
  }

  private SleepDuration calculateBasicSleepDuration() {
    return AstronautHealth.BASIC_SLEEP_DURATION;
  }

  private SleepDuration calculateExtraSleepDuration() {
    return this.calculateBasicSleepDuration()
      + 0.5 * (Math.abs(this.sensorData.glycaemia - AstronautHealth.IDEAL_GLYCAEMIA))
      + 0.3 * (Math.abs(this.sensorData.SpO2 - AstronautHealth.IDEAL_SP02));
  }

  public updateSleepDuration(){
    if (this.hasCriticalHealthCondition()) {
      this.sleepDuration = this.calculateExtraSleepDuration();
    } else {
      this.sleepDuration = this.calculateBasicSleepDuration();
    }
  }
}`;

const comment = `Da die komplexen Codestellen in Methoden ausgelagert wurden, ist die bedingte Verzweigung in \`updateSleepDuration()\` leichter zu verstehen.`;

export const task2: ITask = {
  uuid: `f71993ba-c4da-4490-8286-0bedd08a6871`,
  name: `Astronaut Sleep Duration`,
  difficulty: Difficulty.Hard,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4-11,13-15,17-21,24,25,27`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveMethod },
        { value: Refactoring.GuardClauses },
        { value: Refactoring.DecomposeConditional, isValid: true },
      ],
      lines: `6-9, 11-13, 15`,
    },
  ],
};
