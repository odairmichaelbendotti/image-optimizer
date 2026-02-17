import { type OrientationType } from "./orientation";

export type ScaleProps = {
  setOperation: React.Dispatch<React.SetStateAction<string>>;
  orientation: OrientationType;
};
