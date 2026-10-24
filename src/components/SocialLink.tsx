import type { ContactInfo } from "../lib/types";
import Link from "./Link";

function SocialLink({ Icon, link }: ContactInfo) {
  return (
    <Link href={link}>
      <div className="items-center justify-center gap-4 p-2 text-neutral-400 hover:text-orange-500 md:p-4">
        <Icon className="size-6" />
      </div>
    </Link>
  );
}

export default SocialLink;
