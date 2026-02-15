import { Scaling, Scale3d, ImageUp, CloudUpload, X } from "lucide-react";

const ImageProcessor = ({ setImages }: { setImages: React.Dispatch<any> }) => {
  console.log(window.innerWidth);
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center gap-4">
      <div className="md:max-w-200 w-fit md:h-100 h-full bg-accent rounded-xl p-4">
        <img
          src="./teste.png"
          className="max-w-full max-h-full object-fill rounded-lg mx-auto"
        />
      </div>
      <div className="w-full md:max-w-80">
        <p className="text-md text-muted">Operações</p>
        <div>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3">
              <Scaling size={18} className="text-surface" />
              <p className="text-sm">Redimensionar</p>
            </div>
            <div className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3">
              <Scale3d size={18} className="text-surface" />
              <p className="text-sm">Comprimir</p>
            </div>
            <div className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3">
              <ImageUp size={18} className="text-surface" />
              <p className="text-sm">Converter</p>
            </div>
            <div className="flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3">
              <CloudUpload size={18} className="text-surface" />
              <p className="text-sm">Upload</p>
            </div>

            <div
              onClick={() => setImages([])}
              className="mt-4 flex items-center gap-2 border hover:cursor-pointer hover:bg-accent border-accent rounded-sm px-4 py-3"
            >
              <X size={18} className="text-red-400" />
              <p className="text-sm text-red-400">Cancelar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageProcessor;
