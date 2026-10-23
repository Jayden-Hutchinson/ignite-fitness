import { CONSULTATION_INFO, HERO_TEXT } from "../lib/constants";
import Glow from "./Glow";
import FlexCenter from "./FlexCenter";
import Heading from "./Heading";
import Socials from "./Socials";
import SubHeading from "./SubHeading";
import VideoThumbnail from "./VideoThumbnail";
import CallToAction from "./CallToAction";
import FadeInGroup from "./FadeInGroup";

function Hero() {
  return (
    <FlexCenter className="relative min-h-screen w-full flex-col justify-evenly overflow-x-clip bg-cover bg-center px-10 pb-20">
      <Glow
        blur={200}
        opacity={0.5}
        className="bg-accent -top-1/2 size-120 md:size-200"
      />
      <FadeInGroup>
        <Heading>{HERO_TEXT.heading}</Heading>
        <SubHeading>{HERO_TEXT.subHeading}</SubHeading>

        <VideoThumbnail
          videoId="ZnWdHE5PR8k"
          title="How I Achieved My Dream Physique"
          className="w-65 md:w-150"
        />

        <CallToAction href={CONSULTATION_INFO.href}>
          {CONSULTATION_INFO.text}
        </CallToAction>

        <Socials />
      </FadeInGroup>
    </FlexCenter>
  );
}

export default Hero;
