import { ImageUp, Link, Scale3d, Scaling, X } from "lucide-react";

type OperationsProps = {
  handleChangeInterface: (operation: string) => void;
  setImages: React.Dispatch<any>;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
};

const Operations = ({
  handleChangeInterface,
  setImages,
  setOperation,
}: OperationsProps) => {
  function handleCancelOperation() {
    setImages(null);
    setOperation("Operações");
  }

  return (
    <div className="mt-2 flex flex-col gap-2">
      <div
        onClick={() => handleChangeInterface("Redimensionar")}
        className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
      >
        <Scaling size={18} className="text-surface" />
        <p className="text-sm">Redimensionar</p>
      </div>
      <div
        onClick={() => handleChangeInterface("Comprimir")}
        className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
      >
        <Scale3d size={18} className="text-surface" />
        <p className="text-sm">Comprimir</p>
      </div>
      <div
        onClick={() => handleChangeInterface("Converter")}
        className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
      >
        <ImageUp size={18} className="text-surface" />
        <p className="text-sm">Converter</p>
      </div>
      <div
        onClick={() => handleChangeInterface("Compartilhar")}
        className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
      >
        <Link size={18} className="text-surface" />
        <p className="text-sm">Compartilhar</p>
      </div>

      <div
        onClick={handleCancelOperation}
        className="mt-4 flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
      >
        <X size={18} className="text-red-400" />
        <p className="text-sm text-red-400">Cancelar</p>
      </div>
    </div>
  );
};

export default Operations;
