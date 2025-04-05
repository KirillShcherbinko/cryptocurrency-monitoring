import Style from './Symbol.module.css';
import { ReactNode } from 'react';

interface SymbolProps {
  children: ReactNode;
}

export default function Symbol({children}: SymbolProps) {
  return <h4 className={Style.Symbol}>{children}</h4>
}