import { SOCIALS } from "../lib/constants";
import SocialLink from "./SocialLink";
import FlexRow from "./FlexRow";

type Props = {
  className?: string;
};

function Socials({ className }: Props) {
  return (
    <FlexRow
      className={`${className} z-1 items-center justify-center gap-8 text-white`}
    >
      {SOCIALS.map((contact) => (
        <SocialLink {...contact} />
      ))}
    </FlexRow>
  );
}

export default Socials;
