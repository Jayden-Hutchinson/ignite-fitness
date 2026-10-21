import type { ContactInfo } from "../lib/types";
import Link from "./Link";

function SocialLink({ Icon, link }: ContactInfo) {
  return (
    <Link href={link}>
      <div className="items-center justify-center gap-4 rounded-full border-2 p-2 text-neutral-300 hover:text-orange-500 md:p-4">
        <Icon className="size-5" />
      </div>
    </Link>
  );
}

export default SocialLink;
