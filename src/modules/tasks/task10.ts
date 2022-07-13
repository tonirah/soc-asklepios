import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class TemperatureSensor {
  public double readTemperature(Room room) { /* ... */ }

  public void reset() { /* ... */ }

  //...
}

class FanController {
  public void reset() { /* ... */ }

  public void increaseVentilation() { /* ... */ }

  // ...
}


// usage
void resetComponents(
        TemperatureSensor temperatureSensor,
        FanController fanController) {
  temperatureSensor.reset();
  fanController.reset();
}`;

const cleanCode = `interface IResettableComponent {
  void reset();
}

class TemperatureSensor implements IResettableComponent {
  public double readTemperature(Room room) { /* ... */ }

  public void reset() { /* ... */ }

  //...
}

class FanController implements IResettableComponent {
  public void reset() { /* ... */ }

  public void increaseVentilation() { /* ... */ }

  // ...
}


// usage
void resetComponents(IResettableComponent[] components) {
  for (IResettableComponent component : components) {
    component.reset();
  }
}`;

const comment = `Durch ein kontextspezifisches Interface kann die Methode allgemeiner implementiert werden und es werden Abhängigkeiten reduziert.`;

export const task10: ITask = {
  uuid: `4b1b900f-865d-4f91-bbcd-3977db0fac9f`,
  name: `Reset Components`,
  difficulty: Difficulty.Hard,
  showAllOptions: false,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1-3, 5, 8, 13, 14, 23-27`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.HideDelegate },
        { value: Refactoring.ReplaceInheritanceWithDelegation },
        { value: Refactoring.ExtractInterface, isValid: true },
        { value: Refactoring.RemoveMiddleMan },
      ],
      lines: `4, 10, 19-24`,
    },
  ],
};
