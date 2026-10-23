import TransformationImage from "./TransformationImage";
import result1 from "../assets/images/result-1.jpg";
import result3 from "../assets/images/result-3.jpg";
import result4 from "../assets/images/result-4.jpg";
import result5 from "../assets/images/result-5.jpg";
import result6 from "../assets/images/result-6.jpg";
import result7 from "../assets/images/result-7.jpg";
import Section from "./Section";
import HighlightText from "./HighlightText";
import Glow from "./Glow";
type Props = {};

function Transformations({}: Props) {
  return (
    <Section>
      <Glow
        size={500}
        blur={200}
        opacity={0.5}
        className="bg-accent top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
      />

      <Glow
        size={500}
        blur={200}
        opacity={0.5}
        className="bg-accent top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
      />

      <div className="mb-16 flex w-full justify-center">
        <HighlightText
          text="3-Month Transformations"
          className="flex-col text-center md:flex-row md:text-start"
        />
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        <TransformationImage src={result1} />
        <TransformationImage src={result3} />
        <TransformationImage src={result4} />
        <TransformationImage src={result5} />
        <TransformationImage src={result6} />
        <TransformationImage src={result7} />
      </div>
    </Section>
  );
}

export default Transformations;
