import { CodeSmell, IInputData, IOption, Refactoring } from '@/modules/tasks/';
import { useCombobox } from 'downshift';
import { useState } from 'react';
import { HandleChangedInput } from '@/common/hooks';
import { parseRequiredInt } from '@/common/utils/parseRequired';
import classNames from 'classnames';

const MIN_CHARACTERS_FOR_COMBOBOX = parseRequiredInt(
  process.env.MIN_CHARACTERS_FOR_COMBOBOX,
);

export function Input({
  index,
  inputData,
  handleChangedInput,
  isLineHintActive,
  isValid,
}: {
  index: number;
  inputData: IInputData;
  handleChangedInput: HandleChangedInput;
  isLineHintActive: boolean;
  isValid?: boolean;
}) {
  const [availableOptions, setAvailableOptions] = useState<
    IOption<Refactoring | CodeSmell>[]
  >([]);

  const shouldProvideOptions = (inputValue: string) => {
    return inputValue.length >= MIN_CHARACTERS_FOR_COMBOBOX;
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
    handleChangedInput(index, inputValue);
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

  const formControlClasses = classNames(
    `form-control rounded-box p-0.5 w-full max-w-xs transition-all`,
    {
      [`bg-error`]: isValid === false,
      [`bg-success`]: isValid,
    },
  );

  return (
    <div className={formControlClasses}>
      <label className="label" {...getLabelProps()}>
        <span className="label-text pl-1">
          {index + 1} | {inputData.type}:
        </span>
        {isLineHintActive && (
          <span className="label-text-alt">Z. {inputData.lines}</span>
        )}
      </label>
      <div>
        <div {...getComboboxProps()}>
          <input
            {...getInputProps()}
            className="input input-bordered w-full"
            disabled={isValid}
          />
        </div>
        <ul
          {...getMenuProps()}
          className="absolute menu bg-neutral mt-1 w-full max-w-xs overflow-auto max-h-96"
        >
          {isOpen &&
            availableOptions.map((item, index) => (
              <li key={`option-${index}`} {...getItemProps({ item, index })}>
                <a>{item.value}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
