import multer from "multer";
import { randomUUID } from "node:crypto";

export const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tmp");
    console.log(file);
  },
  filename: function (req, file, cb) {
    const name = randomUUID();
    cb(null, `${name}.${file.mimetype.split("/")[1]}`);
  },
});

export const upload = multer({
  storage: diskStorage,
});
