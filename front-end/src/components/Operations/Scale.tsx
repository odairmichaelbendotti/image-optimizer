import { RectangleVertical, Scaling, Undo2 } from "lucide-react";
import { type ScaleProps } from "../../types/Scale";

const Scale = ({ setOperation, orientation }: ScaleProps) => {
  return (
    <div className="h-full mt-2 flex flex-col justify-between py-4 gap-4">
      <div>
        {orientation.width > orientation.heigth && (
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
            >
              <option value="1920x1080">1920 x 1080 (Full HD - 16:9)</option>
              <option value="800x600">800 x 600 (SVGA - 4:3)</option>
              <option value="3840x2160">3840 x 2160 (4K - 16:9)</option>
              <option value="1080x1080">1080 x 1080 (Quadrado - 1:1)</option>
            </select>
          </>
        )}

        {orientation.width < orientation.heigth && (
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
        <div className="border flex items-center text-accent justify-center gap-2 cursor-pointer hover:opacity-80 border-surface bg-surface text-center rounded-md py-2">
          <Scaling size={18} className="text-accent" />
          Redimensionar
        </div>
        <div
          onClick={() => setOperation("Operações")}
          className="flex items-center justify-center cursor-pointer gap-2 border-2 border-background hover:border-surface transaction duration-150 py-2 rounded-md"
        >
          <Undo2 size={14} />
          Voltar
        </div>
      </div>
    </div>
  );
};

export default Scale;
