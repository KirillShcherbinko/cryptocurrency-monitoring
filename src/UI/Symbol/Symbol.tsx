import Style from './Symbol.module.css';
import { useData } from "../../hooks/useData";

export default function Symbol() {
  const data = useData<{symbol: string}>();
  return data?.symbol && <h4 className={Style.Symbol}>{data.symbol}</h4>
}