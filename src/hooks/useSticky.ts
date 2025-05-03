import { RefObject, useLayoutEffect, useState } from "react";

export const useSticky = (
  targetRef: RefObject<HTMLElement>,
  rootRef: RefObject<HTMLElement>
) => {
  const [isSticky, setIsSticky] = useState<boolean>(true);

  useLayoutEffect(() => {
    const targetElement = targetRef.current;
    const rootElement = rootRef.current;

    if (!targetElement || !rootElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(entry.isIntersecting),
      { root: rootElement, threshold: 0, rootMargin: '0px 0px 500px 0px' }
    );

    observer.observe(targetElement);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [targetRef, rootRef]);

  return isSticky;
};
