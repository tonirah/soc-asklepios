import { IInputData } from '@/modules/tasks';
import { useState } from 'react';

type EvaluateInputs = (
  inputDataArray: IInputData[],
  userInputs: (string | undefined)[],
) => void;

interface IInputEvaluation {
  isSolved: boolean;
  evaluationValues: boolean[];
}

const isSolved = (evaluationValues: boolean[]) => {
  if (evaluationValues.length === 0) {
    return false;
  }
  return evaluationValues.every((isValid) => isValid);
};

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
  initialEvaluationValues: boolean[] = [],
): [IInputEvaluation, EvaluateInputs] {
  const initialInputEvaluation: IInputEvaluation = {
    isSolved: isSolved(initialEvaluationValues),
    evaluationValues: initialEvaluationValues,
  };
  const [inputEvaluation, setInputEvaluation] = useState(
    initialInputEvaluation,
  );

  const evaluateInputs = (
    inputDataArray: IInputData[],
    inputs: (string | undefined)[],
  ) => {
    const evaluationValues = inputDataArray.map((inputData, index) => {
      return isValid(inputs, index, inputData);
    });

    setInputEvaluation({
      evaluationValues,
      isSolved: isSolved(evaluationValues),
    });
  };

  return [inputEvaluation, evaluateInputs];
}
