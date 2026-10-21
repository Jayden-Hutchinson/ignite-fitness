import { CERTIFICATIONS } from "../lib/constants";
import Carousel from "./Carousel";
import Certification from "./Certification";
import Flex from "./Flex";
import HighlightText from "./HighlightText";
import Section from "./Section";

type Props = {};

function Certifications({}: Props) {
  const items = CERTIFICATIONS.map((certification) => (
    <Certification {...certification} />
  ));
  return (
    <Section>
      <Flex className="mb-16 justify-center">
        <HighlightText text="My Certifications" />
      </Flex>
      <Carousel items={items} />
    </Section>
  );
}

export default Certifications;
