import { type OrientationType } from "../types/orientation";

export type ImageProcessorType = {
  setImage: React.Dispatch<File | null>;
  orientation: OrientationType;
  image: File | null;
};
