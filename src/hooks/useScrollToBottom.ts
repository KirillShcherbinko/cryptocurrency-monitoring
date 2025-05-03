import { RefObject, useEffect } from "react";

export const useScrollToBottom = (
  ref: RefObject<HTMLElement>,
  lastId: string,
  isScroll: boolean,
) => {
  useEffect(() => {
    if (ref.current && isScroll) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref, lastId]);
};
