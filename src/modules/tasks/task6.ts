import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class AirQualitySensor {
  double nitrogen = 0.78;
  double oxygen = 0.21;
  double other = 0.01;
  // ...
}

// usage
void logAirQuality() {
  System.out.println("--- AIR QUALITY: ---");
  System.out.println("nitrogen: " + sensor.nitrogen);
  System.out.println("oxygen: " + sensor.oxygen);
  System.out.println("other: " + sensor.other);
}`;

const cleanCode = `class AirQualitySensor {
  private double nitrogen = 0.78;
  private double oxygen = 0.21;
  private double other = 0.01;

  public double getNitrogen() {
    return nitrogen;
  }

  public double getOxygen() {
    return oxygen;
  }

  public double getOther() {
    return other;
  }

  // ...
}

// usage
void logAirQuality() {
  System.out.println("--- AIR QUALITY: ---");
  System.out.println("nitrogen: " + sensor.getNitrogen());
  System.out.println("oxygen: " + sensor.getOxygen());
  System.out.println("other: " + sensor.getOther());
}`;

const comment = `Instanzvariablen sind typischerweise Interna von Klassen, und sollten mithilfe von Zugriffsmethoden gekapselt werden.`;

export const task6: ITask = {
  uuid: `2806d2fa-1579-49e1-a7c1-564b36959836`,
  name: `Air Quality Sensor`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.VentilationThermalControl,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `2-4, 6-8, 10-12, 14-16, 24-26`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.Rename },
        { value: Refactoring.ChangeValueToReference },
        { value: Refactoring.EncapsulateField, isValid: true },
        { value: Refactoring.IntroduceForeignMethod },
      ],
      lines: `2-4, 11-13`,
    },
  ],
};
