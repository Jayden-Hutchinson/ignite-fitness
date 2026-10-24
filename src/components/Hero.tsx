import { CONSULTATION_INFO, HERO_CONTENT } from "../lib/constants";
import Glow from "./Glow";
import FlexCenter from "./FlexCenter";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import VideoThumbnail from "./VideoThumbnail";
import CallToAction from "./CallToAction";
import FadeInGroup from "./FadeInGroup";
import Socials from "./Socials";

function Hero() {
  return (
    <FlexCenter className="relative min-h-screen w-full flex-col justify-evenly overflow-x-clip bg-cover bg-center px-10 pb-30 md:pb-20">
      <Glow
        blur={300}
        opacity={0.5}
        className="bg-accent -top-1/2 size-120 md:size-200"
      />
      <FadeInGroup className="max-w-2xl gap-5 md:gap-10">
        <Heading highlight="Transformation">{HERO_CONTENT.heading}</Heading>
        <SubHeading>{HERO_CONTENT.subHeading}</SubHeading>

        <VideoThumbnail
          videoId={HERO_CONTENT.videoId}
          title={HERO_CONTENT.videoTitle}
          className="border-accent w-65 border-2 md:w-150"
        />

        <FlexCenter className="flex-col">
          <CallToAction href={CONSULTATION_INFO.href}>
            {CONSULTATION_INFO.text}
          </CallToAction>

          <p className="font-heebo mt-3 text-xs text-neutral-400 md:text-sm">
            {CONSULTATION_INFO.subText}
          </p>
        </FlexCenter>

        <Socials />
      </FadeInGroup>
    </FlexCenter>
  );
}

export default Hero;
