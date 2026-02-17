import { Router, type Request, type Response } from "express";

export const ImageScale = (req: Request, res: Response) => {
  const { nome } = req.body;
  res.json({ message: nome });
};
