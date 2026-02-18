import toast from "react-hot-toast";

export const processImageFile = (img: File) => {
  if (!img) {
    toast.error("Imagem não enviada");
    return;
  }

  const file = new FormData();

  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onload = (e) => {
    if (!e.target?.result) {
      toast.error("Imagem não selecionada");
      return;
    }
  };

  file.append("image", img);

  console.log(reader);
};
