import { CodeSmell, IInputData, IOption, Refactoring } from '@/modules/tasks/';
import { useCombobox } from 'downshift';
import { Dispatch, useState } from 'react';
import { IInputAction } from '@/common/hooks/useIndexedInputs';

const MIN_CHARACTERS = 2;

export function Input({
  index,
  inputData,
  inputDispatch,
  isLineHintActive,
  isValid,
}: {
  index: number;
  inputData: IInputData;
  inputDispatch: Dispatch<IInputAction>;
  isLineHintActive: boolean;
  isValid?: boolean;
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

  const setBackground = () => {
    if (isValid === undefined) {
      return ``;
    } else if (isValid) {
      return `bg-green-500`;
    } else {
      return `bg-red-500`;
    }
  };

  return (
    <div className={`flex gap-3 py-6 max-w-fit ${setBackground()}`}>
      <label className="w-28 text-right" {...getLabelProps()}>
        {inputData.type}:
      </label>
      <div>
        <div {...getComboboxProps()}>
          <input {...getInputProps()} className="bg-gray-200" />
        </div>
        <ul {...getMenuProps()}>
          {isOpen &&
            availableOptions.map((item, index) => (
              <li
                key={{ index }}
                {...getItemProps({ item, index })}
                className="odd:bg-gray-200 even:bg-gray-300"
              >
                {item.value}
              </li>
            ))}
        </ul>
      </div>
      <div className="w-28">
        {isLineHintActive && <span>Z. {inputData.lines}</span>}
      </div>
    </div>
  );
}
