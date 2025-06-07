export type ImageSize = 'small' | 'medium' | 'large';

export interface ImageProps {
  key: string;
  src: string;
  alt: string;
  dimensions: {
    width: number;
    height: number;
  };
}
