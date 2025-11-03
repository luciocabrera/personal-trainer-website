import type { ReactNode } from "react";

export interface TrainingCardProps {
  children?: ReactNode;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}
