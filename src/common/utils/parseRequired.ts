export function parseRequiredString(value: string | undefined | null): string {
  if (value == undefined) {
    throw new Error(`A required value is "undefined".`);
  }
  return value;
}

export function parseRequiredInt(value: string | undefined | null): number {
  const string = parseRequiredString(value);
  const int = parseInt(string, 10);

  if (Number.isNaN(int)) {
    throw new Error(
      `An required integer could not be parsed. Value: "${value}"`,
    );
  }

  return int;
}

export function parseRequiredBoolean(
  value: string | undefined | null,
): boolean {
  const string = parseRequiredString(value);

  if (string === `true`) {
    return true;
  }

  if (string === `false`) {
    return false;
  }

  throw new Error(`An required boolean could not be parsed. Value: "${value}"`);
}
