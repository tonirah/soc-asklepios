import { IInputData } from '@/modules/tasks';
import { useCallback, useMemo, useState } from 'react';

type EvaluateInputs = (
  inputDataArray: IInputData[],
  userInputs: (string | undefined)[],
) => void;

const isValid = (
  inputs: (string | undefined)[],
  index: number,
  inputData: IInputData,
) => {
  let isValid = false;
  const input = inputs[index];
  if (input) {
    const option = inputData.options.find(
      (option) => option.value.toLowerCase() === input.toLowerCase(),
    );
    if (option && option.isValid) {
      isValid = true;
    }
  }
  return isValid;
};

export function useInputEvaluation(
  initialInputEvaluation: boolean[] = [],
): [boolean[], boolean, EvaluateInputs] {
  const [inputEvaluation, setInputEvaluation] = useState(
    initialInputEvaluation,
  );

  const isSolved = useMemo(() => {
    if (inputEvaluation.length === 0) {
      return false;
    }
    return inputEvaluation.every((isValid) => isValid);
  }, [inputEvaluation]);

  const evaluateInputs = useCallback(
    (inputDataArray: IInputData[], inputs: (string | undefined)[]) => {
      const inputEvaluation = inputDataArray.map((inputData, index) => {
        return isValid(inputs, index, inputData);
      });

      setInputEvaluation(inputEvaluation);
    },
    [setInputEvaluation],
  );

  return [inputEvaluation, isSolved, evaluateInputs];
}
