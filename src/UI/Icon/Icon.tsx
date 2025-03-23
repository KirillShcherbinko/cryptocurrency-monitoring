import { useData } from "../../hooks/useData";
import Style from "./Icon.module.css";

export default function Icon() {
  const data = useData<{image: string, name: string}>();
  if (!data) return null;
  return <img className={Style.Icon} src={data.image} alt={data.name} />;
}
