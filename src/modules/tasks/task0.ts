import {
  Category,
  CodeSmell,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ``;

const dirtyCode = `class PropulsionController {
  private Velocity currentSpeed;
  // ...

  private void increaseMainThrust(Delta<Thrust> thrustIncrease) {
    // ...
    this.mainRocket.increaseThrust(thrustIncrease);
  }

  public void setCurrentSpeed(Velocity currentSpeed) {
    this.currentSpeed = currentSpeed;
  }

  public void increaseVelocity(Delta<Velocity> deltaV) throws PropulsionError {
    Delta<Thrust> thrustIncrease = this.calculateThrustIncrease(deltaV);

    // prepare main rocket engine
    if (!this.mainRocket.isAvailable()) {
      throw new PropulsionError(PropulsionError.messages.MAIN_UNAVAILABLE);
    }
    this.mainRocket.prepareForThrustIncrease();

    this.increaseMainThrust(thrustIncrease);
  }
}`;

const cleanCode = `class PropulsionController {
  private Velocity currentSpeed;
  // ...

  private void increaseMainThrust(Delta<Thrust> thrustIncrease) {
    // ...
    this.mainRocket.increaseThrust(thrustIncrease);
  }

  private void prepareMainRocket() throws PropulsionError {
    if (!this.mainRocket.isAvailable()) {
      throw new PropulsionError(PropulsionError.messages.MAIN_UNAVAILABLE);
    }
    this.mainRocket.prepareForDeltaThrust();
  }

  public void setCurrentSpeed(Velocity currentSpeed) {
    this.currentSpeed = currentSpeed;
  }

  public void increaseVelocity(Delta<Velocity> deltaV) throws PropulsionError {
    Delta<Thrust> thrustIncrease = this.calculateThrustIncrease(deltaV);
    this.prepareMainRocket();
    this.increaseMainThrust(thrustIncrease);
  }
}`;

const comment = `Der durch den Kommentar beschriebene Code kann in eine Methode mit ähnlichem Namen ausgelagert werden.

Dann ist auch das Abstraktionsniveau innerhalb von \`increaseVelocity()\` konsistent.

Details: [Refactorings](${basePath}/info/#refactorings).`;

export const task0: ITask = {
  uuid: `031b215a-dc73-41e1-bcfb-d796a173f75e`,
  name: `Velocity Increase Control`,
  difficulty: Difficulty.Simple,
  showAllOptions: true,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `10-15,23`,
  comment,

  inputs: [
    {
      type: InputType.CodeSmell,
      options: [
        { value: CodeSmell.LongMethod },
        { value: CodeSmell.Comment, isValid: true },
      ],
      lines: `17-21`,
    },
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ExtractClass },
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.ExtractMethod, isValid: true },
      ],
      lines: `17-21`,
    },
  ],
};
