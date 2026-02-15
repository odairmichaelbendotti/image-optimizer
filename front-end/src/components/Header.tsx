import { Image } from "lucide-react";

const Header = () => {
  return (
    <div className="flex gap-2 items-center py-5 px-4">
      <div className="bg-surface-logo p-2 md:p-3 rounded-lg">
        <Image className="text-surface" />
      </div>
      <h1 className="font-bold">Image Optimizer</h1>
    </div>
  );
};

export default Header;
