import { useState } from "react";
import Operations from "./Operations";
import Scale from "./Scale";
import Compress from "./Compress";

const ImageProcessor = ({ setImages }: { setImages: React.Dispatch<any> }) => {
  const [operation, setOperation] = useState<string>("Operações");

  function handleChangeInterface(operation: string) {
    setOperation(operation);
    console.log(operation);
  }

  console.log(window.innerWidth);
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
              setImages={setImages}
              handleChangeInterface={handleChangeInterface}
              setOperation={setOperation}
            />
          )}

          {operation === "Redimensionar" && (
            <Scale setOperation={setOperation} />
          )}

          {operation === "Comprimir" && (
            <Compress setOperation={setOperation} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageProcessor;
