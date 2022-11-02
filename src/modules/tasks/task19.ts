import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Astronaut {
  private String name;
  private Date dateOfBirth;
  private String room;
  private int bedNumber;

  public String getLocation() {
    return "Room: " + room + ", bed: " + bed;
  }

  // ...
}`;

const cleanCode = `class Location {
  private String room;
  private int bedNumber;

  public String getLocation() {
    return "Room: " + room + ", bed: " + bed;
  }
}

class Astronaut {
  private String name;
  private Date dateOfBirth;
  private Location location;

  public String getLocation() {
    return location.getLocation();
  }

  // ...
}`;

const comment = `Manche Eigenschaften beschreiben eher andere Objekte, wie in diesem Beispiel einen Ort. Diese können in eine eigene Klasse (hier: Location) extrahiert werden.`;

export const task19: ITask = {
  uuid: `f8bda52d-2969-4a09-a866-288bf11eb20f`,
  name: `Where is my Astronaut?`,
  difficulty: Difficulty.Medium,
  showAllOptions: false,
  category: Category.CrewHealthHypersleep,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1-8, 13, 16`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ChangeValueToReference },
        { value: Refactoring.IntroduceParameterObject },
        { value: Refactoring.ExtractClass, isValid: true },
        { value: Refactoring.RemoveMiddleMan },
      ],
      lines: `4, 5, 8`,
    },
  ],
};
