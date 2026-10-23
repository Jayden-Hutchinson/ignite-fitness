import type { ReactElement } from "react";

type Props = {
  children?: string | ReactElement;
};

function SubHeading({ children }: Props) {
  return <div className="font-heebo text-center md:text-xl">{children}</div>;
}

export default SubHeading;
