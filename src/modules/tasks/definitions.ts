export enum Category {
  CentralFlightSystem = `Central Flight System`,
  VentilationThermalControl = `Cabin Ventilation and Thermal Control`,
}

export enum Difficulty {
  Simple,
  Medium,
  Hard,
}

export enum Refactoring {
  ExtractClass = `Extract Class`,
  MoveMethod = `Move Method`,
  ExtractMethod = `Extract Method`,
  GuardClauses = `Replace Nested Conditional with Guard Clauses`,
}

export enum CodeSmell {
  Comment = `Comment`,
  LongMethod = `Long Method`,
  LongParameterList = `Long Parameter List`,
}

export interface IOption<Type> {
  value: Type;
  isValid?: boolean;
}

export enum InputType {
  Refactoring = `Refactoring`,
  CodeSmell = `Code Smell`,
}

export interface IInputData {
  type: InputType;
  options: IOption<Refactoring | CodeSmell>[];
  lines: string;
}

export interface ITask {
  uuid: string;
  name: string;
  difficulty: Difficulty;
  category: Category;
  dirtyCode: string;
  cleanCode: string;
  cleanCodeHighlightedLines: string;
  comment: string;
  inputs: IInputData[];
}
