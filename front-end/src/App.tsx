import { useState } from "react";
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import ImageProcessor from "./components/ImageProcessor";

const App = () => {
  const [images, setImages] = useState<any>([]);

  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length === 0 || e.target.files === null) {
      console.log("Insira uma imagem");
      return;
    }

    setImages(e.target.files);
    console.log(images);
  }

  return (
    <div className="flex flex-col p-3 h-screen">
      <Header />
      <div className="flex justify-center items-center flex-1">
        {images.length === 0 ? (
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
          <ImageProcessor setImages={setImages} />
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
