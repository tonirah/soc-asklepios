export enum Category {
  CentralFlightSystem = `Central Flight System (CFS)`,
  VentilationThermalControl = `Cabin Ventilation and Thermal Control (VTC)`,
  CrewHealthHypersleep = `Crew Health and Hypersleep (CHH)`,
  SpaceRadiationProtection = `Space Radiation Protection (SRP)`,
}

export enum Difficulty {
  Simple,
  Medium,
  Hard,
}

export enum Refactoring {
  ExtractClass = `Klasse extrahieren (Extract Class)`,
  MoveMethod = `Methode verlagern (Move Method)`,
  ExtractMethod = `Methode extrahieren (Extract Method)`,
  GuardClauses = `Verschachtelte Bedingungen durch Wächter ersetzen (Replace Nested Conditional with Guard Clauses)`,
  DecomposeConditional = `Bedingung zerlegen (Decompose Conditional)`,
}

export enum CodeSmell {
  Comment = `Kommentar (Comment)`,
  LongMethod = `Lange Methode (Long Method)`,
  LongParameterList = `Lange Parameterliste (Long Parameter List)`,
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
  showAllOptions: boolean;
  category: Category;
  dirtyCode: string;
  cleanCode: string;
  cleanCodeHighlightedLines: string;
  comment: string;
  inputs: IInputData[];
}
