import { IInput } from '@/tasks/common';

export function Input({ inputData }: { inputData: IInput }) {
  return (
    <>
      <h2>Input</h2>
      <p>Zeilen: {inputData.lines}</p>
      {inputData.options.map((option, index) => (
        <p key={index}>
          Option: {option.value + `, ` + (option.correct === true)}
        </p>
      ))}
    </>
  );
}
