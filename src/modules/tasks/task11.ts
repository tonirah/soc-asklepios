import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class Queue<T> extends LinkedList<T> {
  public void enqueue(T element){
    add(element);
  }

  public void logQueue() {
    for (int i = 0; i < size(); i++) {
      System.out.println(get(i));
    }
  }

  // ...
}

// usage
Queue<RadiationWarning> radiationWarningQueue = new Queue<>();
radiationWarningQueue.enqueue(warning);
radiationWarningQueue.logQueue();`;

const cleanCode = `class Queue<T> {
  private LinkedList<T> _linkedList = new LinkedList<>();

  public void enqueue(T element){
    _linkedList.add(element);
  }

  public void logQueue() {
    for (int i = 0; i < _linkedList.size(); i++) {
      System.out.println(_linkedList.get(i));
    }
  }

  // ...
}

// usage
Queue<RadiationWarning> radiationWarningQueue = new Queue<>();
radiationWarningQueue.enqueue(warning);
radiationWarningQueue.logQueue();`;

const comment = `Die Wiederverwendung von Code mithilfe von Vererbung bringt einige Schwierigkeiten mit sich, insbesondere wenn der geerbte Code außerhalb der eigenen Kontrolle ist. Auch das zugehörige Subtyping kann zu Schwierigkeiten führen. Durch dieses Refactoring wird die Vererbung aufgehoben, wobei die Funktionalität durch die Verwendung eines internen Delegates erhalten bleibt.`;

export const task11: ITask = {
  uuid: `324c5afd-eff7-4a5a-bf1e-ce284d9b4585`,
  name: `Radiation Warning Queue`,
  difficulty: Difficulty.Hard,
  showAllOptions: false,
  category: Category.SpaceRadiationProtection,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `1, 2, 5, 9, 10`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ReplaceInheritanceWithDelegation, isValid: true },
        { value: Refactoring.HideDelegate },
        { value: Refactoring.ExtractSubclass },
        { value: Refactoring.EncapsulateField },
      ],
      lines: `1, 3, 7, 8`,
    },
  ],
};
