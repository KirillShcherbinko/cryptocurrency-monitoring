import Button from "../../UI/Button/Button";
import FollowButtonIcon from "../../assets/icon-bottom.png";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import { useSticky } from "../../hooks/useSticky";
import Style from "./ScrollWrapper.module.css";
import { ReactNode, useRef } from "react";

interface ScrollWrapperProps<T> {
  data: T[];
  isScroll?: boolean;
  children: ReactNode;
}

export default function ScrollWrapper<T>({
  data,
  isScroll,
  children,
}: ScrollWrapperProps<T>) {
  const endRef = useRef<HTMLDivElement>(null!);
  const scrollConentRef = useRef<HTMLDivElement>(null!);

  const isEndSticky = useSticky(endRef, scrollConentRef);

  useScrollToBottom<T>(endRef, data, isScroll || isEndSticky);

  return (
    <div className={Style.ScrollWrapper}>
      <div className={Style.ScrollContent} ref={scrollConentRef}>
        {children}
        <div className={Style.End} ref={endRef}>  </div>
      </div>
      {!isEndSticky && (
        <Button
          className={Style.Button}
          onClick={() => endRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          <img
            className={Style.Icon}
            src={FollowButtonIcon}
            alt="Bottom"
          />
        </Button>
      )}
    </div>
  );
}
