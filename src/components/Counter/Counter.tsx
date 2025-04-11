import Style from './Counter.module.css';
import { ChangeEvent, useEffect, useState } from "react";
import { isAppropriateValue } from "../../utils";
import Button from '../../UI/Button/Button';

interface CounterProps {
  minValue: number;
  maxValue: number;
  initialValue: number | '';
  onChange?: (value: number) => void;
}

export default function Counter({minValue, maxValue, initialValue, onChange}: CounterProps) {
  const [value, setValue] = useState<number | ''>(initialValue);

  const isIncrementDisabled = value === maxValue || !value;
  const isDecrementDisabled = value === minValue || !value;

  const decrement = () => setValue((prev) => Number(prev) - 1);
  const increment = () => setValue((prev) => Number(prev) + 1);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = evt.target.value;
    
    if (inputValue === '') {
      setValue('');
    } else if (isAppropriateValue(inputValue, minValue, maxValue)) {
      setValue(Number(inputValue));
    } 
  };

  useEffect(() => {
    if (typeof value === 'number') onChange?.(value);
  }, [value, onChange]);

  return (
    <div className={Style.Counter}>
      <Button
        className={Style.CounterButton}
        onClick={decrement}
        disabled={isDecrementDisabled}
      >-</Button>
      <input
        className={Style.CounterInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button
        className={Style.CounterButton}
        onClick={increment}
        disabled={isIncrementDisabled}
      >+</Button>
    </div>
  );
}
