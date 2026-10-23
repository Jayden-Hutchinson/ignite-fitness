import type { ReactElement } from "react";

type Props = {
  children?: string | ReactElement;
};

function Heading({ children }: Props) {
  return (
    <div className="font-manrope text-center text-4xl font-bold md:text-6xl">
      {children}
    </div>
  );
}

export default Heading;
