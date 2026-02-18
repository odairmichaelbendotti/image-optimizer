import { type OrientationType } from "./orientation";

export type ScaleProps = {
  setOperation: React.Dispatch<React.SetStateAction<string>>;
  orientation: OrientationType;
  image: File | null;
};
