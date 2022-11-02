import {
  Category,
  Difficulty,
  InputType,
  ITask,
  Refactoring,
} from './definitions';

const dirtyCode = `class BoardComputer {
  private List<Connection> connections;

  public List<Connection> getConnections() {
    return connections;
  }

  public void setConnections(List<Connection> connections) {
    this.connections = connections;
  }

  // ...
}`;

const cleanCode = `class BoardComputer {
  private List<Connection> connections;

  public void addConnection(Connection connection) {
    this.connections.add(connection);
  }

  public void removeConnection(Connection connection) {
    this.connections.remove(connection);
  }

  // ...
}`;

const comment = `Bei einer 1:n-Beziehung sollte konzeptuell nicht die vollständige Collection zugreifbar sein. Diese sollte als privates Feld gekapselt werden, und nur über eigene Methoden der Klasse modifizierbar und lesbar sein.`;

export const task17: ITask = {
  uuid: `68457470-e64b-4d0a-809b-e0ef8b955846`,
  name: `Connection collection`,
  difficulty: Difficulty.Simple,
  showAllOptions: false,
  category: Category.CentralFlightSystem,

  dirtyCode,
  cleanCode,
  cleanCodeHighlightedLines: `4-6, 8-10`,

  comment,

  inputs: [
    {
      type: InputType.Refactoring,
      options: [
        { value: Refactoring.ChangeValueToReference },
        { value: Refactoring.EncapsulateCollection, isValid: true },
        { value: Refactoring.InlineMethod },
        { value: Refactoring.MoveFieldMethod },
      ],
      lines: `4-6, 8-10`,
    },
  ],
};
