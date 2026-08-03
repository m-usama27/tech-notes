import express from "express";
import path from "path";

import { rootDir } from "./util/path.js";
import rootRouter from "./routes/root.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(rootDir, "public")));

app.use(rootRouter);

app.all("*anything", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.status(404).json({ error: "404 Not Found" });
  } else {
    res.status(404).type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`Sever running at port ${PORT}`);
});
