import Style from './Counter.module.css';
import { ChangeEvent, useEffect, useState } from "react";
import { isAppropriateValue } from "../../utils";
import Button from '../../UI/Button/Button';
import classNames from 'classnames';

interface CounterProps {
  className?: string;
  minValue: number;
  maxValue: number;
  initialValue: number | '';
  onChange?: (value: number | '') => void;
}

export default function Counter({className, minValue, maxValue, initialValue, onChange}: CounterProps) {
  const [value, setValue] = useState<number | ''>(initialValue);

  const isIncrementDisabled = value === maxValue;
  const isDecrementDisabled = value === minValue || !value;

  const decrement = () => setValue((prev) => Number(prev) - 1);
  const increment = () => setValue((prev) => Number(prev) + 1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    
    if (inputValue === '') {
      setValue('');
    } else if (isAppropriateValue(inputValue, minValue, maxValue)) {
      setValue(Number(inputValue));
    } 
  };

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  return (
    <div className={classNames(Style.Counter, `${className}`)}>
      <Button
        className={Style.Button}
        onClick={decrement}
        disabled={isDecrementDisabled}
      >-</Button>
      <input
        className={Style.Input}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button
        className={Style.Button}
        onClick={increment}
        disabled={isIncrementDisabled}
      >+</Button>
    </div>
  );
}
