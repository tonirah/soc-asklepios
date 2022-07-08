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
  showAllOptions,
  isLineHintActive,
  isValid,
}: {
  index: number;
  inputData: IInputData;
  handleChangedInput: HandleChangedInput;
  showAllOptions: boolean;
  isLineHintActive: boolean;
  isValid?: boolean;
}) {
  const initialOptions = showAllOptions ? inputData.options : [];
  const [availableOptions, setAvailableOptions] =
    useState<IOption<Refactoring | CodeSmell>[]>(initialOptions);

  const inputPlaceholder = `Mit der Eingabe beginnen${
    showAllOptions ? `` : ` (mindestens ${MIN_CHARACTERS_FOR_COMBOBOX} Zeichen)`
  }...`;

  const shouldProvideOptions = (inputValue: string) => {
    if (showAllOptions) {
      return true;
    }
    return inputValue.length >= MIN_CHARACTERS_FOR_COMBOBOX;
  };

  const filterAvailableOptions = (inputValue: string) => {
    if (!shouldProvideOptions(inputValue)) {
      return setAvailableOptions([]);
    }

    return setAvailableOptions(
      inputData.options.filter((option) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );
  };

  const onInputValueChange = ({ inputValue }: { inputValue?: string }) => {
    if (inputValue !== undefined) {
      filterAvailableOptions(inputValue);
      handleChangedInput(index, inputValue);
    }
  };

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    getToggleButtonProps,
  } = useCombobox({
    items: availableOptions,
    itemToString: (option) => (option ? option.value : ``),
    onInputValueChange,
  });

  const getFormControlClasses = classNames(
    `form-control rounded-box p-0.5 w-full transition-all mb-2`,
    {
      [`bg-error`]: isValid === false,
      [`bg-success`]: isValid,
    },
  );

  function getInputWrapperProps() {
    if (showAllOptions) {
      // make input element clickable to toggle options
      return {
        className: `cursor-pointer`,
        ...getToggleButtonProps(),
      };
    }
    return {};
  }

  return (
    <div className={getFormControlClasses}>
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
          <div {...getInputWrapperProps()}>
            <input
              {...getInputProps()}
              className="input input-bordered w-full"
              disabled={isValid}
              placeholder={inputPlaceholder}
            />
          </div>
        </div>
        <div className="absolute container text-left pr-5">
          <ul {...getMenuProps()} className="menu mt-1">
            {isOpen &&
              availableOptions.map((item, index) => (
                <li
                  key={`option-${index}`}
                  {...getItemProps({ item, index })}
                  className="odd:bg-neutral even:bg-neutral-focus"
                >
                  <a className="py-3 px-4">{item.value}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
