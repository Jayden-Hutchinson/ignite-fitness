import { useState } from "react";
import { PROGRAM_BONUSES, PROGRAM_FEATURES } from "../lib/constants";
import Flex from "./Flex";
import ProgramItemList from "./ProgramItemList";
import Section from "./Section";
import HighlightText from "./HighlightText";
import Glow from "./Glow";

type Props = {};

type Tab = "features" | "bonuses";

function ProgramItems({}: Props) {
  const [tab, setTab] = useState<Tab>("features");

  return (
    <Section>
      <Glow
        blur={150}
        opacity={0.5}
        className="bg-accent top1/2 left-1/2 size-100 -translate-x-1/2 md:size-100"
      />

      <Flex className="flex-col items-center gap-12">
        <HighlightText text="What's Included" className="justify-center" />
        <Flex className="items-center justify-center gap-8">
          <button
            onClick={() => setTab("features")}
            className={`cursor-pointer rounded-full border-2 px-6 py-2 ${tab === "features" ? "border-orange-500 bg-orange-500" : ""}`}
          >
            Features
          </button>
          <button
            onClick={() => setTab("bonuses")}
            className={`cursor-pointer rounded-full border-2 px-6 py-2 ${tab === "bonuses" ? "border-orange-500 bg-orange-500" : ""}`}
          >
            Bonuses
          </button>
        </Flex>

        {tab === "features" && <ProgramItemList items={PROGRAM_FEATURES} />}
        {tab === "bonuses" && <ProgramItemList items={PROGRAM_BONUSES} />}
      </Flex>
    </Section>
  );
}

export default ProgramItems;
