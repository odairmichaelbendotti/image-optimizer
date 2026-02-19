import { RectangleVertical, Scaling, Undo2 } from "lucide-react";
import { type ScaleProps } from "../../types/Scale";
import { processImageFile } from "../../utils/image-processor";
import toast from "react-hot-toast";
import { useState } from "react";

const Scale = ({ setOperation, orientation, image }: ScaleProps) => {
  const [dimension, setDimension] = useState("1920x1080");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!image) {
      toast.error("Erro ao processar imagem");
      return;
    }

    if (dimension.length === 0) {
      toast.error("Dimensões inválidas");
      return;
    }

    const img = processImageFile(image, dimension);

    const promise = await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("bora");
        resolve();
      }, 3000);
    });

    try {
      const response = await fetch(`http://localhost:3000/upload`, {
        method: "POST",
        body: img,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao Redimensionar elemento");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="h-full mt-2 flex flex-col justify-between py-4 gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        {orientation.width > orientation.height && (
          <>
            <div className="flex items-center gap-2 mt-2 mb-4 bg-accent py-2 rounded-lg px-2">
              <RectangleVertical size={18} className="rotate-90" />
              <span className="text-xs">Detectado: Imagem horizontal</span>
            </div>

            <label htmlFor="dimention">Defina as dimensões</label>
            <select
              name=""
              id="dimention"
              className="text-sm w-full p-2 border-2 border-surface rounded-md text-amber-50 bg-accent"
              onChange={(e) => setDimension(e.target.value)}
            >
              <option value="1920x1080">1920 x 1080 (Full HD - 16:9)</option>
              <option value="800x600">800 x 600 (SVGA - 4:3)</option>
              <option value="3840x2160">3840 x 2160 (4K - 16:9)</option>
              <option value="1080x1080">1080 x 1080 (Quadrado - 1:1)</option>
            </select>
          </>
        )}

        {orientation.width < orientation.height && (
          <>
            <div className="flex items-center gap-2 mt-2 mb-4 bg-accent py-2 rounded-lg px-2">
              <RectangleVertical size={18} />
              <span className="text-xs">Detectado: Imagem vertical</span>
            </div>

            <label htmlFor="dimention">Defina as dimensões</label>
            <select
              name=""
              id="dimention"
              className="text-sm w-full p-2 border-2 border-surface rounded-md text-amber-50 bg-accent"
            >
              <option value="1920x1080">1920 x 1080 (Full HD - 16:9)</option>
              <option value="800x600">800 x 600 (SVGA - 4:3)</option>
              <option value="3840x2160">3840 x 2160 (4K - 16:9)</option>
              <option value="1080x1080">1080 x 1080 (Quadrado - 1:1)</option>
            </select>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <button
          disabled={isLoading}
          className={`${isLoading ? "cursor-default" : "cursor-pointer"} border flex items-center text-accent justify-center gap-2 hover:opacity-80 border-surface bg-surface text-center rounded-md py-2`}
        >
          <Scaling size={18} className="text-accent" />
          {isLoading ? "Carregando" : "Redimensionar"}
        </button>
        <div
          onClick={() => setOperation("Operações")}
          className="flex items-center justify-center cursor-pointer gap-2 border-2 border-background hover:border-surface transaction duration-150 py-2 rounded-md"
        >
          <Undo2 size={14} />
          Voltar
        </div>
      </div>
    </form>
  );
};

export default Scale;
