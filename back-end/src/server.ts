import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
