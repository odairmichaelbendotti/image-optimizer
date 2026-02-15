import { Upload } from "lucide-react";

const Uploader = () => {
  return (
    <label
      htmlFor="upload"
      className="max-w-150 py-16 flex-col gap-2 w-full bg-accent rounded-xl cursor-pointer border-2 border-dashed transform duration-150 hover:border-surface border-accent flex justify-center items-center"
    >
      <div className="bg-surface-logo p-2 md:p-3 rounded-lg">
        <Upload className="text-surface" />
      </div>
      <p className="font-bold">Selecione uma imagem</p>
      <span className="text-mutted text-xs">
        PNG, JPG, WebP, GIF e outros formatos suportados
      </span>
    </label>
  );
};

export default Uploader;
