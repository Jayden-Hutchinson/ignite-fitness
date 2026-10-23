import { BIO_PARAGRAPHS } from "../lib/constants";
import Expandable from "./Expandable";
import Flex from "./Flex";
import HighlightText from "./HighlightText";
import Section from "./Section";
import miguelFlexing from "../assets/images/miguel-flex.png";
import miguelYoung from "../assets/images/mig-young.jpg";
import { useState } from "react";
import Glow from "./Glow";

type Props = {};

function Story({}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section>
      <Glow
        blur={150}
        opacity={0.5}
        className="bg-accent right-0 size-75 translate-x-1/2 md:size-100"
      />

      <Flex className="items-center justify-evenly">
        <Flex className="flex-col items-center gap-8 md:w-1/3 md:items-start">
          <HighlightText text="My Story" />
          <div className="relative aspect-4/5 w-50 overflow-hidden rounded-lg md:hidden md:w-85">
            <img
              src={miguelYoung}
              alt="Miguel young"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                expanded ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={miguelFlexing}
              alt="Miguel flexing"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <Expandable
            text={BIO_PARAGRAPHS}
            onClick={() => setExpanded((prev) => !prev)}
            className="max-w-prose text-center text-neutral-300 md:text-start"
          />
        </Flex>

        <div className="relative hidden aspect-4/5 w-50 overflow-hidden rounded-lg md:block md:w-85">
          <img
            src={miguelYoung}
            alt="Miguel young"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={miguelFlexing}
            alt="Miguel flexing"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </Flex>
    </Section>
  );
}

export default Story;
