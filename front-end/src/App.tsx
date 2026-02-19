import { useState } from "react";
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import ImageProcessor from "./components/ImageProcessor";
import { type OrientationType } from "./types/orientation";

const App = () => {
  const [image, setImage] = useState<File | null>(null);
  const [orientation, setOrientation] = useState<OrientationType>({
    width: 1920,
    height: 1080,
  });

  function getImgDimension(file: File) {
    const img = new Image();

    img.onload = () => {
      setOrientation({ width: img.width, height: img.height });
    };
    img.src = URL.createObjectURL(file);
  }

  console.log(orientation);

  function handleSelectImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length === 0 || e.target.files === null) {
      console.log("Insira uma imagem");
      return;
    }

    getImgDimension(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  return (
    <div className="flex flex-col p-3 h-screen">
      <Header />
      <div className="flex justify-center items-center flex-1">
        {!image ? (
          <>
            <Uploader />
            <input
              type="file"
              className="hidden"
              id="upload"
              onChange={(e) => handleSelectImage(e)}
            />
          </>
        ) : (
          <ImageProcessor
            setImage={setImage}
            image={image}
            orientation={orientation}
          />
        )}
      </div>
      <footer>
        <p className="text-center">
          Imagem Optimizer by dev <span className="font-bold">Odair</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
