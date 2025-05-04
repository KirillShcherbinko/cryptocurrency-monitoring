import Style from "./Card.module.css";
import { ReactNode, RefObject } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import classNames from "classnames";

interface CardProps {
  ref?: RefObject<HTMLDivElement>;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  hoverEffect?: VariantLabels | TargetAndTransition | undefined;
}

export default function Card({
  ref,
  className,
  children,
  onClick,
  hoverEffect,
}: CardProps) {
  return (
    <motion.div
      ref={ref}
      className={classNames(Style.Card, className ? className : null)}
      onClick={onClick}
      whileHover={hoverEffect}
    >
      {children}
    </motion.div>
  );
}
