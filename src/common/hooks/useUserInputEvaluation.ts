import { IInputData } from '@/modules/tasks';
import { useState } from 'react';

type EvaluateInputs = (
  inputDataArray: IInputData[],
  userInputs: (string | undefined)[],
) => void;

export default function useUserInputEvaluation(
  initialUserInputEvaluation: boolean[] = [],
): [boolean[], EvaluateInputs] {
  const [userInputEvaluation, setUserInputEvaluation] = useState(
    initialUserInputEvaluation,
  );

  const evaluateInputs = (
    inputDataArray: IInputData[],
    userInputs: (string | undefined)[],
  ) => {
    inputDataArray.map((inputData, index) => {
      let isValid = false;
      const userInput = userInputs[index];
      if (userInput) {
        const option = inputData.options.find(
          (option) => option.value.toLowerCase() === userInput.toLowerCase(),
        );
        if (option && option.isValid) {
          isValid = true;
        }
      }
      setUserInputEvaluation((previous) => {
        const newUserInputEvaluation = [...previous];
        newUserInputEvaluation[index] = isValid;
        return newUserInputEvaluation;
      });
    });
  };

  return [userInputEvaluation, evaluateInputs];
}
