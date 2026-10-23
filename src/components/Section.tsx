import { useRef } from "react";
import { useIsVisible } from "../lib/useIsVisible";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <section
      ref={ref}
      className={`${className} relative overflow-x-clip px-[5vw] py-25 transition duration-2000 ease-out md:px-[10vw] md:py-50 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </section>
  );
}

export default Section;
