import type { IconType } from "react-icons";

export type ContactInfo = {
  Icon: IconType;
  link: string;
};

export type CertificationInfo = {
  name: string;
  src: string;
};

export type ReviewInfo = {
  name: string;
  numStars: number;
  paragraphs: string[];
};

export type ProgramItem = {
  title: string;
  description: string;
};
