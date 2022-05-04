import { CodeSmell, IInputData, IOption, Refactoring } from '@/tasks/common';
import { useCombobox } from 'downshift';
import { useState } from 'react';

const MIN_CHARACTERS = 2;

export function Input({ inputData }: { inputData: IInputData }) {
  const [availableOptions, setAvailableOptions] = useState<
    IOption<Refactoring | CodeSmell>[]
  >([]);

  const shouldProvideOptions = (inputValue: string) => {
    return inputValue.length >= MIN_CHARACTERS;
  };

  const filterAvailableOptions = ({ inputValue }: { inputValue?: string }) => {
    let filteredOptions: IOption<Refactoring | CodeSmell>[] = [];

    if (inputValue && shouldProvideOptions(inputValue)) {
      filteredOptions = inputData.options.filter((option) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }

    setAvailableOptions(filteredOptions);
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
    onInputValueChange: filterAvailableOptions,
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
      <p>Z. {inputData.lines}</p>
    </>
  );
}
