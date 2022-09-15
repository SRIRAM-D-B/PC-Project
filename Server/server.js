import Express from "express";
import { PORT } from "./Const.js";
import mongoose from "mongoose";
import { mongoUrl } from "./Const.js";

const app = Express();

mongoose
  .connect(mongoUrl)
  .then(() => console.log("server connected successfully!!!"))
  .catch((err) => console.log("server connection failed!!!", err.message));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
