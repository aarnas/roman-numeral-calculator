import { KeyboardEvent } from "react";

interface Props {
  maxValue: number;
  minValue: number;
}

const validNumberFieldKeys = /[0-9]|Backspace|Arrow(Up|Down|Left|Right)/;

export const onKeyDownValidateNumberInRange = (
  event: KeyboardEvent<HTMLInputElement>,
  { maxValue, minValue }: Props
) => {
  const inputValue = event.currentTarget.value;
  const inputNumber = Number(inputValue + event.key);

  if (
    !validNumberFieldKeys.test(event.key) ||
    inputNumber < minValue ||
    inputNumber > maxValue ||
    (event.key === "ArrowUp" && inputValue === maxValue.toString()) ||
    (event.key === "ArrowDown" && inputValue === minValue.toString())
  ) {
    event.preventDefault();
  }
};
