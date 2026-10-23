import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  stagger?: number;
  startDelay?: number;
  className?: string;
};

function FadeInGroup({
  children,
  stagger = 200,
  startDelay = 0,
  className = "",
}: Props) {
  return (
    <>
      {Children.toArray(children).map((child, index) => (
        <div
          key={index}
          className={`animate-fade-in ${className}`}
          style={{ animationDelay: `${startDelay + index * stagger}ms` }}
        >
          {child}
        </div>
      ))}
    </>
  );
}

export default FadeInGroup;
