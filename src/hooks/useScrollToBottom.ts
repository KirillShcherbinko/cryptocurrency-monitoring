import { RefObject, useEffect } from "react";

export const useScrollToBottom = <T>(
  ref: RefObject<HTMLElement>,
  data: T[],
  isScroll: boolean = true,
) => {
  useEffect(() => {
    if (!ref.current || !isScroll) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [ref, data]);
};
