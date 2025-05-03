import Button from "../../UI/Button/Button";
import FollowButtonIcon from "../../assets/icon-bottom.png";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import { useSticky } from "../../hooks/useSticky";
import Style from "./ScrollWrapper.module.css";
import { ReactNode, useRef } from "react";

interface ScrollWrapperProps {
  id: string;
  lastId: string;
  children: ReactNode;
}

export default function ScrollWrapper({
  id,
  lastId,
  children,
}: ScrollWrapperProps) {
  const endRef = useRef<HTMLDivElement>(null!);
  const scrollConentRef = useRef<HTMLDivElement>(null!);

  const isEndSticky = useSticky(endRef, scrollConentRef);

  useScrollToBottom(endRef, lastId, isEndSticky && (id === lastId));

  return (
    <div className={Style.ScrollWrapper}>
      <div className={Style.ScrollContent} ref={scrollConentRef}>
        {children}
        <div className={Style.End} ref={endRef}>  </div>
      </div>
      {!isEndSticky && (
        <Button
          className={Style.ScrollButton}
          onClick={() => endRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          <img
            className={Style.ScrollButtonImage}
            src={FollowButtonIcon}
            alt="Bottom"
          />
        </Button>
      )}
    </div>
  );
}
