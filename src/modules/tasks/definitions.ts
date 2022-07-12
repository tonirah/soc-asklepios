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
  InlineMethod = `Methode inlinen (Inline Method)`,
  GuardClauses = `Verschachtelte Bedingungen durch Wächter ersetzen (Replace Nested Conditional with Guard Clauses)`,
  DecomposeConditional = `Bedingung zerlegen (Decompose Conditional)`,
  ConditionalPolymorphism = `Bedingung durch Polymorphismus ersetzen (Replace Conditional with Polymorphism)`,
  IntroduceNullObject = `Einführung eines Nullobjekts (Introduce Null Object)`,
  IntroduceAssertion = `Zusicherung einfügen (Introduce Assertion)`,
  Rename = `Methode oder Variable umbenennen (Rename)`,
  IntroduceParameterObject = `Parameterklasse einführen (Introduce Parameter Object)`,
  ReplaceConstructorWithFactoryMethod = `Konstruktor durch eine Factory-Methode ersetzen (Replace Constructor with Factory Method)`,
  ReplaceErrorCodeWithException = `Fehlercode durch Ausnahme ersetzen (Replace Error Code with Exception)`,
  ReplaceExceptionWithPrecondition = `Ausnahme durch Vorbedingung ersetzen (Replace Exception with Precondition)`,
  ReplaceExceptionWithTest = `Ausnahme durch Test ersetzen (Replace Exception with Test)`,
  EncapsulateField = `Feld Kapseln (Encapsulate Field)`,
  EncapsulateCollection = `Collections kapseln (Encapsulate Collection)`,
  ReplaceDataValueWithObject = `Attributwert durch Objekt ersetzen (Replace Data Value with Object)`,
  ChangeValueToReference = `Wert durch Referenz ersetzen (Change Value to Reference)`,
  BidirectionalAssociation = `Unidirektionale in bidirektionale Verknüpfung ändern (Change Unidirectional Association to Bidirectional)`,
  ExtractSuperclass = `Superklasse extrahieren (Extract Superclass)`,
  PullUpFieldMethod = `Feld oder Methode nach oben verschieben (Pull Up Field / Method)`,
  PushDownFieldMethod = `Feld oder Methode nach unten verschieben (Push Down Field / Method)`,
  ExtractSubclass = `Subklasse extrahieren (Extract Subclass)`,
  ExtractInterface = `Interface extrahieren (Extract Interface)`,
  InferType = `Interface berechnen (Infer Type)`,
  ReplaceSubclassWithFields = `Subklassen durch Felder ersetzen (Replace Subclass with Fields)`,
  ReplaceInheritanceWithDelegation = `Vererbung durch Delegation ersetzen (Replace Inheritance with Delegation)`,
  ReplaceMethodWithMethodObject = `Methode in Methodenobjekt auslagern (Replace Method with Method Object)`,
  MoveFieldMethod = `Feld oder Methode verlagern (Move Field / Method)`,
  HideDelegate = `Delegat verbergen (Hide Delegate)`,
  RemoveMiddleMan = `Mittelsmann entfernen (Remove Middle Man)`,
  IntroduceForeignMethod = `Klassenfremde Methode einführen (Introduce Foreign Method)`,
  IntroduceLocalExtension = `Lokale Erweiterung einführen (Introduce Local Extension)`,
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

export type UuidV4 = string;

export interface ITask {
  uuid: UuidV4;
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
