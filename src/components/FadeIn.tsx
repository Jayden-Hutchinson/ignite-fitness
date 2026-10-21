import { useRef, type ReactNode } from "react";
import { useIsVisible } from "../lib/useIsVisible";

type Props = {
  children?: ReactNode;
  className?: string;
};

function FadeIn({ className, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(containerRef);

  return (
    <div
      ref={containerRef}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? `translate-y-0 opacity-100` : `translate-y-10 opacity-0`}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;
