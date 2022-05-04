import { CodeSmell, IInputData, IOption, Refactoring } from '@/modules/tasks/';
import { useCombobox } from 'downshift';
import { Dispatch, useState } from 'react';
import { IInputAction } from '@/common/hooks/useIndexedInputs';

const MIN_CHARACTERS = 2;

export function Input({
  index,
  inputData,
  inputDispatch,
}: {
  index: number;
  inputData: IInputData;
  inputDispatch: Dispatch<IInputAction>;
}) {
  const [availableOptions, setAvailableOptions] = useState<
    IOption<Refactoring | CodeSmell>[]
  >([]);

  const shouldProvideOptions = (inputValue: string) => {
    return inputValue.length >= MIN_CHARACTERS;
  };

  const filterAvailableOptions = (inputValue?: string) => {
    let filteredOptions: IOption<Refactoring | CodeSmell>[] = [];

    if (inputValue && shouldProvideOptions(inputValue)) {
      filteredOptions = inputData.options.filter((option) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }

    setAvailableOptions(filteredOptions);
  };

  const onInputValueChange = ({ inputValue }: { inputValue?: string }) => {
    filterAvailableOptions(inputValue);
    inputDispatch({ type: `setInput`, index, value: inputValue });
  };

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: availableOptions,
    itemToString: (option) => (option ? option.value : ``),
    onInputValueChange,
  });

  return (
    <>
      <label {...getLabelProps()}>{inputData.type}:</label>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          availableOptions.map((item, index) => (
            <li key={{ index }} {...getItemProps({ item, index })}>
              {item.value}
            </li>
          ))}
      </ul>
      <span>Z. {inputData.lines}</span>
    </>
  );
}
