import { PERSONAL_INFO } from "../lib/constants";
import Flex from "./Flex";
import FlexCenter from "./FlexCenter";
import Section from "./Section";
import portrait from "../assets/images/portrait.jpg";
import HighlightText from "./HighlightText";

type Props = {};

function Bio({}: Props) {
  return (
    <Section>
      <FlexCenter className="font-google-sans">
        <Flex className="w-full flex-col items-center gap-8 md:flex-row md:justify-evenly">
          <img
            src={portrait}
            alt={`${PERSONAL_INFO.firstName} portrait`}
            className="w-2/3 max-w-75 min-w-5 rounded-lg md:w-100 md:max-w-100"
          />

          <Flex className="flex-col items-start justify-center gap-4 md:flex-col md:gap-8">
            <div>
              <div className="mb-2 text-orange-500 md:text-xl">HI, I'M</div>
              <HighlightText text={PERSONAL_INFO.fullName} />
            </div>

            <div className="text-xl font-medium text-neutral-200 md:text-xl">
              {PERSONAL_INFO.title}
            </div>

            <ul className="list-disc space-y-4 pl-5 text-neutral-300 marker:text-orange-500 md:text-lg">
              {PERSONAL_INFO.qualifications.map((qualification) => (
                <li key={qualification}>{qualification}</li>
              ))}
            </ul>
          </Flex>
        </Flex>
      </FlexCenter>
    </Section>
  );
}

export default Bio;
