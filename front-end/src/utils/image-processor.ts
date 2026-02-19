import toast from "react-hot-toast";

export const processImageFile = (img: File, dimension: string) => {
  if (!img) {
    toast.error("Imagem não enviada");
    return;
  }

  if (dimension.length === 0 || !dimension) {
    toast.error("Dimensões inválidas");
    return;
  }

  const file = new FormData();
  file.append("image", img);
  file.append("dimension", dimension);
  return file;
};
