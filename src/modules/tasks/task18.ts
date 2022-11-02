import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class SleepController {
  void updateSleepDuration(AstronautData astronautData, Duration duration) {
    Astronaut astronaut = new Astronaut(astronautData);
    astronaut.updateSleepDuration(8);

    // inform other systems about change
    otherSystem1.updateAstronaut(astronaut);
    // ...
  }
}`;

const cleanCode = `class SleepController {
  private AstronautRepository astronautRepository;

  void updateSleepDuration(AstronautData astronautData, Duration duration) {
    Astronaut astronaut = astronautRepository.get(astronautData.id);
    astronaut.updateSleepDuration(8);
  }
}`;

const comment = `Im ersten Codebeispiel wird nur ein lokales Wertobjekt erstellt und verändert. Da konzeptuell ein einzigartiges Objekt vorhanden ist, wird im zweiten Beispiel stattdessen eine Referenz auf ein eindeutiges Objekt bezogen (aus einem zentralen Repository). Änderungen am Objekt sind dann für andere Systeme unmittelbar verfügbar, sofern diese ebenso eine Referenz auf das Objekt nutzen.`;

export const task18: ITask = {
  uuid: `e8d4b50a-3356-4875-95df-394d304d340a`,
  name: `Managing Astronaut Data`,
  difficulty: Difficulty.Hard,
  showAllOptions: true,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `2, 5`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.InferType },
        { value: Refactoring.ReplaceErrorCodeWithException },
        { value: Refactoring.MoveFieldMethod },
        { value: Refactoring.ChangeValueToReference, isValid: true },
      ],
      lines: `3, 6-8`,
    },
  ],
};
