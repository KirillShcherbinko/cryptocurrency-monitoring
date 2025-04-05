import Style from "./Icon.module.css";

interface IconProps {
  iconSrc: string;
  iconAlt: string;
}

export default function Icon({iconSrc, iconAlt}: IconProps) {
  return <img className={Style.Icon} src={iconSrc} alt={iconAlt} />;
}
