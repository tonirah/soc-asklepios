import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class RadiationInstrument {
  Reading getReading() { /* ... */ }

  InstrumentType getType() {
    return 'i';
  }
}

class PositronInstrument extends RadiationInstrument {
  InstrumentType getType() {
    return "p";
  }
}

class AlphaInstrument extends RadiationInstrument {
  InstrumentType getType() {
    return "a";
  }
}
`;

const cleanCode = `class RadiationInstrument {
  private InstrumentType type;

  Reading getReading() { /* ... */ }

  InstrumentType getType() {
    return type;
  }
}`;

const comment = `Subklassen, deren Implementierung sehr ähnlich ist, können aufgelöst werden, indem in der ehemaligen Superklasse ein entsprechendes Feld (z.B. type) für die Unterscheidung eingeführt wird.`;

export const task25: ITask = {
  uuid: `40e5a045-f7c2-4477-8a47-492330cd71fe`,
  name: `So many Instruments`,
  difficulty: Difficulty.Medium,
  showAllOptions: true,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `2, 6-8`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.InlineMethod },
        { value: Refactoring.ChangeValueToReference },
        { value: Refactoring.ReplaceErrorCodeWithException },
        { value: Refactoring.ReplaceSubclassWithFields, isValid: true },
      ],
      lines: `4-6, 9-13, 15-19`,
    },
  ],
};
