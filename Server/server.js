import Express from "express";
import { PORT } from "./Const.js";

const app = Express();

app.listen(PORT, () => {
  console.log(`Server active at ${PORT}`);
});
