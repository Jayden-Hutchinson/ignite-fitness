import { RxHamburgerMenu } from "react-icons/rx";
import { BUSINESS_INFO } from "../lib/constants";
import Flex from "./Flex";
import logoIcon from "../assets/images/favicon.png";

type Props = {};

function Navbar({}: Props) {
  return (
    <Flex className="sticky top-0 z-99 h-15 w-full items-center bg-black px-10">
      <img src={logoIcon} className="size-10" />
      <span className="font-google-sans text-lg font-medium">
        {BUSINESS_INFO.name}
      </span>

      <div className="md:hidden">
        <RxHamburgerMenu />
      </div>
      <div className="hidden md:block"></div>
    </Flex>
  );
}

export default Navbar;
