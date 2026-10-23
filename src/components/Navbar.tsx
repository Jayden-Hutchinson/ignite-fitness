import { BUSINESS_INFO, CONSULTATION_INFO } from "../lib/constants";
import Flex from "./Flex";
import logoIcon from "../assets/images/favicon.png";
import Link from "./Link";

type Props = {};

function Navbar({}: Props) {
  return (
    <Flex className="sticky top-0 z-99 h-15 w-full items-center justify-between bg-black/50 px-2 md:px-10">
      <Flex className="items-center">
        <img src={logoIcon} className="size-10" />
        <span className="font-manrope text-bold text-xl font-bold">
          {BUSINESS_INFO.name}
        </span>
      </Flex>

      <Link
        href={CONSULTATION_INFO.href}
        className="border-accent hover:bg-accent font-heebo text-accent hidden rounded-full border px-5 py-1 hover:text-white md:block"
      >
        {CONSULTATION_INFO.text}
      </Link>
      {/* <div className="md:hidden">
        <RxHamburgerMenu />
      </div>
      <div className="hidden md:block"></div> */}
    </Flex>
  );
}

export default Navbar;
