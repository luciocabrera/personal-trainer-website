import type { ReactNode } from 'react';

export type TrainingCardProps = {
  children?: ReactNode;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
};
