import type { ReactNode } from "react";

export type TrainingCardProps = {
  children?: ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};
