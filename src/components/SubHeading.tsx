import type { ReactElement } from "react";

type Props = {
  children?: string | ReactElement;
};

function SubHeading({ children }: Props) {
  return (
    <div className="font-heebo text-md text-center text-neutral-300 md:text-xl">
      {children}
    </div>
  );
}

export default SubHeading;
