import { Router, type Request, type Response } from "express";

export const ImageScale = (req: Request, res: Response) => {
  const { dimension } = req.body;

  if (!dimension || !req.file) {
    console.log("Dimensões não enviadas");
    return;
  }

  const dim = dimension.split("x");
  res.json({ message: "Olá" });
};
