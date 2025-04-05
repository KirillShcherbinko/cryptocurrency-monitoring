import Style from './Counter.module.css';
import { ChangeEvent, useEffect, useState } from "react";
import { isAppropriateValue } from "../../utils";

interface CounterProps {
  minValue: number;
  maxValue: number;
  initialValue: number | '';
  onChange?: (value: number) => void;
}

export default function Counter({minValue, maxValue, initialValue, onChange}: CounterProps) {
  const [value, setValue] = useState<number | ''>(initialValue);

  const getNumber = (num: unknown): number => typeof num === 'number' ? num : minValue;

  const increment = () => setValue((prev) => Math.min(getNumber(prev) + 1, maxValue));
  const decrement = () => setValue((prev) => Math.max(getNumber(prev) - 1, maxValue));

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = evt.target.value;
    
    if (inputValue === '') {
      setValue('');
    } else if (isAppropriateValue(inputValue, minValue, maxValue)) {
      setValue(Number(inputValue));
    } 
  };

  // Уведомление для родителя
  useEffect(() => {
    if (typeof value === 'number' && onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <div className={Style.Counter}>
      <button
        className={Style.CounterButton}
        onClick={decrement}
        disabled={value === minValue || !value}
      >-</button>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button
        className={Style.CounterButton}
        onClick={increment}
        disabled={value === maxValue || !value}
      >+</button>
    </div>
  );
}
