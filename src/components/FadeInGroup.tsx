import { Children, type ReactNode } from "react";
import Flex from "./Flex";
import FlexCenter from "./FlexCenter";

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
    <FlexCenter className={`flex-col ${className}`}>
      {Children.toArray(children).map((child, index) => (
        <div
          key={index}
          className={`animate-fade-in ${className}`}
          style={{ animationDelay: `${startDelay + index * stagger}ms` }}
        >
          {child}
        </div>
      ))}
    </FlexCenter>
  );
}

export default FadeInGroup;
