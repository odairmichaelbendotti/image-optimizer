import { useState } from "react";
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import ImageProcessor from "./components/ImageProcessor";
import { type OrientationType } from "./types/orientation";

const App = () => {
  const [image, setImage] = useState<any>([]);
  const [orientation, setOrientation] = useState<OrientationType>({
    width: 1920,
    heigth: 1080,
  });

  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length === 0 || e.target.files === null) {
      console.log("Insira uma imagem");
      return;
    }

    setImage(e.target.files[0]);
  }

  return (
    <div className="flex flex-col p-3 h-screen">
      <Header />
      <div className="flex justify-center items-center flex-1">
        {image.length === 0 ? (
          <>
            <Uploader />
            <input
              type="file"
              className="hidden"
              id="upload"
              onChange={(e) => handleUploadImage(e)}
            />
          </>
        ) : (
          <ImageProcessor setImage={setImage} orientation={orientation} />
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
