import logo from "../assets/images/logo.png";
import { CONSULTATION_INFO, HERO_TEXT } from "../lib/constants";
import FlexCenter from "./FlexCenter";
import Link from "./Link";
import Socials from "./Socials";

function Hero() {
  return (
    <FlexCenter className="bg-hero-sm md:bg-hero-md relative min-h-screen w-full flex-col justify-evenly bg-cover bg-center px-10 pb-20">
      <div className="absolute inset-0 bg-black/80" />
      <img
        src={logo}
        alt="Ignite Fitness Logo"
        className="animate-fade-in w-50 md:w-100"
      />
      <div className="animate-fade-in text-md text-center [animation-delay:500ms] md:text-xl">
        {HERO_TEXT.heading}
      </div>

      <Link
        href={CONSULTATION_INFO.href}
        className="animate-fade-in [animation-delay:1000ms]"
      >
        <div className="font-google-sans rounded-lg bg-orange-500 px-5 py-3 font-bold md:px-6 md:py-4">
          {CONSULTATION_INFO.text}
        </div>
      </Link>
      <Socials className="animate-fade-in [animation-delay:1500ms]" />
    </FlexCenter>
  );
}

export default Hero;
