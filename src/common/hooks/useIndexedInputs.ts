import { useState } from 'react';

export type HandleChangedInput = (index: number, value?: string) => void;

export function useIndexedInputs(
  initialInputs: (string | undefined)[] = [],
): [(string | undefined)[], HandleChangedInput] {
  const [inputs, setInputs] = useState(initialInputs);

  const handleChangedInput = (index: number, value?: string) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
  };
  return [inputs, handleChangedInput];
}
