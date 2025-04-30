import classNames from "classnames";
import Style from "./Textarea.module.css";
import { ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";

interface TextareaProps {
  className?: string;
  placeholder?: string;
  name: string;
  minLength?: number;
  maxLength?: number;
  value: string;
  onChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (evt: KeyboardEvent<HTMLTextAreaElement>) => void;
  minRows?: number;
  maxRows?: number; 
}

export default function Textarea({
  className,
  placeholder,
  name,
  minLength,
  maxLength,
  value,
  onChange,
  onKeyDown,
  minRows = 1,
  maxRows = 6,
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textareaElement = textareaRef.current;
    if (!textareaElement) return;

    const lineHeight: number = parseFloat(getComputedStyle(textareaElement).lineHeight) || 20;
    const maxHeight = lineHeight * maxRows;

    textareaElement.style.height = 'auto';
    const newHeight = Math.min(textareaElement.scrollHeight, maxHeight);
    textareaElement.style.height = newHeight + 'px'; 

    //setRows(Math.min(maxRows, Math.floor(height / lineHeight)));

  }, [value, maxRows]);

  return (
    <textarea
      ref={textareaRef}
      className={classNames(Style.Textarea, className ? className : null)}
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      rows={minRows}
      spellCheck={true}
      required={true}
      wrap="soft"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
