import { useEffect, useState, type RefObject } from "react";

interface useIsVisibleOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIsVisible<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: useIsVisibleOptions = {},
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const { threshold = 0.5, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);

          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold, rootMargin },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
}
