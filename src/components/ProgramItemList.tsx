import type { ProgramItem } from "../lib/types";
import Flex from "./Flex";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Props = {
  items: ProgramItem[];
};

function ProgramItemList({ items }: Props) {
  return (
    <div className="grid w-full max-w-5xl gap-3 md:grid-cols-2">
      {items.map(({ title, description }, index) => (
        <Flex
          key={index}
          className="font-google-sans gap-4 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-2 md:[&:last-child:nth-child(odd)]:col-span-2"
        >
          <IoCheckmarkCircleOutline className="size-10 shrink-0 text-orange-500" />
          <div>
            <div className="font-bold text-white">{title}</div>
            <div className="text-neutral-300">{description}</div>
          </div>
        </Flex>
      ))}
    </div>
  );
}

export default ProgramItemList;
