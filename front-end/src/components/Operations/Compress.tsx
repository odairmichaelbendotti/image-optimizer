import { Scaling, Undo2 } from "lucide-react";

const Compress = ({
  setOperation,
}: {
  setOperation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="h-full mt-2 flex flex-col justify-between py-4">
      <div>Compress</div>

      <div className="flex flex-col gap-2">
        <div className="border flex items-center text-accent justify-center gap-2 cursor-pointer hover:opacity-80 border-surface bg-surface text-center rounded-md py-2">
          <Scaling size={18} className="text-accent" />
          Comprimir arquivo
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

export default Compress;
