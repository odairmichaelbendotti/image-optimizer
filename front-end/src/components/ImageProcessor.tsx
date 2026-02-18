import { useState } from "react";
import Operations from "./Operations";
import Scale from "./Operations/Scale";
import Compress from "./Operations/Compress";
import Convert from "./Operations/Convert";
import { type ImageProcessorType } from "../types/ImageProcessor";

const ImageProcessor = ({
  setImage,
  image,
  orientation,
}: ImageProcessorType) => {
  const [operation, setOperation] = useState<string>("Operações");

  function handleChangeInterface(operation: string) {
    setOperation(operation);
    console.log(operation);
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center gap-4">
      <div className="md:max-w-200 w-fit md:h-100 h-full bg-accent rounded-xl p-4">
        <img
          src="./teste.png"
          className="max-w-full max-h-full object-fill rounded-lg mx-auto"
        />
      </div>
      <div className="w-full md:max-w-80 flex flex-col p-2">
        <p className="text-md text-muted">{operation}</p>
        <div className="flex-1">
          {operation === "Operações" && (
            <Operations
              setImages={setImage}
              handleChangeInterface={handleChangeInterface}
              setOperation={setOperation}
            />
          )}

          {operation === "Redimensionar" && (
            <Scale
              setOperation={setOperation}
              orientation={orientation}
              image={image}
            />
          )}

          {operation === "Comprimir" && (
            <Compress setOperation={setOperation} />
          )}

          {operation === "Converter" && <Convert setOperation={setOperation} />}
        </div>
      </div>
    </div>
  );
};

export default ImageProcessor;
