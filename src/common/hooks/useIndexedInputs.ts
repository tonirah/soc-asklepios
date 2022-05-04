import { useReducer } from 'react';

export interface IInputAction {
  type: 'setInput'; // only one for now
  index: number;
  value?: string;
}

const inputReducer = (
  prevState: (string | undefined)[],
  inputAction: IInputAction,
) => {
  switch (inputAction.type) {
    case `setInput`:
      const newState = [...prevState];
      newState[inputAction.index] = inputAction.value;
      return newState;
    default:
      return prevState;
  }
};

export default function useIndexedInputs(
  initialSelectedInputs: (string | undefined)[],
) {
  return useReducer(inputReducer, initialSelectedInputs);
}
