import type { CertificationInfo } from "../lib/types";

function Certification({ name, src }: CertificationInfo) {
  return <img src={src} alt={name} className="rounded-lg md:w-150" />;
}

export default Certification;
