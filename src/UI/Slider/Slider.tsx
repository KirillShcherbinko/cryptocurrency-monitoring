import { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react";
import Style from "./Slider.module.css";
import classNames from "classnames";
import { countProgress } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";

interface SliderProps {
  className?: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange?: Dispatch<SetStateAction<number>>;
}

export default function Slider({
    className,
    min,
    max,
    step,
    defaultValue,
    onChange
}: SliderProps) {
  const [value, setValue] = useState<number>(defaultValue);
  const [progress, setProgress] = useState<number>(countProgress(defaultValue, min, max));
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  const tooltipRef = useRef<HTMLDivElement>(null);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sliderValue = Number(e.target.value);
    setValue(sliderValue);
    setProgress(countProgress(sliderValue, min, max));
  }

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${progress}%`;
    }
  }, [progress, isTooltipOpen]);

  return (
    <div className={classNames(Style.SliderContainer, `${className}`)}>
      <div className={Style.SliderWrapper}>
        <input
          className={classNames(Style.Slider, Style.SliderThumb, Style.SliderTrack)}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          onTouchStart={() => setIsTooltipOpen(true)}
          onTouchEnd={() => setIsTooltipOpen(false)}
          style={{'--progress': `${progress}%`} as CSSProperties}
        />
      </div>
        <AnimatePresence>
          {isTooltipOpen && (
            <motion.div
              className={Style.SliderTooltip}
              ref={tooltipRef}
              initial={{ opacity: 0, x: '-50%' }}
              animate={{ opacity: 1, x: '-50%' }}
              exit={{ opacity: 0 , x: '-50%' }}
              transition={{ duration: 0.2 }}
            >
              {value}
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}