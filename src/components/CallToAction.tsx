import type { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "./Link";

type Props = {
  href: string;
  children?: string | ReactNode;
};

function CallToAction({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="group bg-accent font-heebo relative inline-flex h-10 items-center justify-center gap-5 overflow-hidden rounded-full px-5 text-sm font-medium text-neutral-200 transition hover:scale-110 md:h-14 md:px-15 md:text-lg"
    >
      <span>{children}</span>
      <FaArrowRightLong />
      <div className="absolute inset-0 flex h-full w-full transform-[skew(-12deg)_translateX(-100%)] justify-center group-hover:transform-[skew(-12deg)_translateX(100%)] group-hover:duration-1500">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </Link>
  );
}

export default CallToAction;
