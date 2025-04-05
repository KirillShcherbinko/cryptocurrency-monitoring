import Style from "./Card.module.css";
import { ReactNode } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import classNames from "classnames";

interface CardProps {
  className: string;
  children: ReactNode;
  onClick?: () => void;
  hoverEffect?: VariantLabels | TargetAndTransition | undefined;
}

export default function Card({
  className,
  children,
  onClick,
  hoverEffect,
}: CardProps) {
  return (
    <motion.div
      className={classNames(Style.Card, className)}
      onClick={onClick}
      whileHover={hoverEffect}
    >
      {children}
    </motion.div>
  );
}
