import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class SensorResourcePool {
  Stack<Sensor> _availableSensors;
  Stack<Sensor> _allocatedSensors;

  Sensor getSensor() {
    Sensor sensor;
    try {
      sensor = _availableSensors.pop();
      _allocatedSensors.push(sensor);
      return sensor;
    } catch (EmptyStackException e) {
      sensor = new Sensor();
      _allocatedSensors.push(sensor);
      return sensor;
    }
  }
}`;

const cleanCode = `class SensorResourcePool {
  Stack<Sensor> _availableSensors;
  Stack<Sensor> _allocatedSensors;

  Sensor getSensor() {
    Sensor sensor;

    if (_availableSensors.isEmpty()) {
      sensor = new Sensor();
    } else {
      sensor = _availableSensors.pop();
    }
    _allocatedSensors.push(sensor);
    return sensor;
  }
}`;

const comment = `Die missbräuchlich verwendete Exception kann durch einen Test (isEmpty()) ersetzt werden.`;

export const task16: ITask = {
  uuid: `3580a499-45a0-4780-893d-59e97ebe775b`,
  name: `Sensor Resource Pool`,
  difficulty: Difficulty.Simple,
  showAllOptions: true,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `8-14`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.InlineMethod },
        { value: Refactoring.ReplaceExceptionWithTest, isValid: true },
        { value: Refactoring.ExtractClass },
        { value: Refactoring.InferType },
      ],
      lines: `7-15`,
    },
  ],
};
