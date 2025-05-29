export type ImageSize = "small" | "medium" | "large";

export interface ImageProps {
  size: ImageSize;
  alt: string;
  key: string;
}
