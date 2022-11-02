import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class RadarSensor {
  private UUID id;

  // TODO: add, update list to store ObservationEvents (connect both ways)
  // ...
}

class ObservationEvent {
  private RadarSensor sensor;

  public RadarSensor getSensor() {
    return sensor;
  }

  public void setSensor(RadarSensor sensor) {
    this.sensor = sensor;
  }
}`;

const cleanCode = `class RadarSensor {
  private UUID id;

  Set observationEvents = new HashSet();

  void addObservationEvent(ObservationEvent event) {
    event.setSensor(this);
  }
  // ...
}

class ObservationEvent {
  private RadarSensor sensor;

  public RadarSensor getSensor() {
    return sensor;
  }

  public void setSensor(RadarSensor sensor) {
    if (this.sensor != null) {
      this.sensor.observationEvents.remove(this);
    }
    this.sensor = sensor;
    this.sensor.observationEvents.add(this);
  }
}`;

const comment = `In diesem recht komplexen Beispiel wird die unidirektionale 1:n-Beziehung in eine bidirektionale umgewandelt. So sind Änderungen wie addObservationEvent() möglich, welche sich auf beide Objekte der Beziehung direkt auswirken.`;

export const task20: ITask = {
  uuid: `048cdff1-ba7b-4519-97ab-bb1dee5a5e1c`,
  name: `Track Observation Events`,
  difficulty: Difficulty.Hard,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4, 6-8, 20-24`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.ExtractClass },
        { value: Refactoring.BidirectionalAssociation, isValid: true },
        { value: Refactoring.ExtractMethod },
      ],
      lines: `4, 16`,
    },
  ],
};
