export enum Category {
  Category1 = `Category 1`,
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
}

export enum CodeSmell {
  Comment = `Comment`,
  LongMethod = `Long Method`,
  LongParameterList = `Long Parameter List`,
}

interface IOption<Type> {
  value: Type;
  correct?: boolean;
}

export interface IInput {
  options: IOption<Refactoring>[] | IOption<CodeSmell>[];
  lines: string;
}

export interface ITask {
  title: string;
  difficulty: Difficulty;
  category: Category;
  dirtyCode: string;
  cleanCode: string;
  cleanCodeHighlightedLines: string;
  comment: string;
  inputs: IInput[];
}
