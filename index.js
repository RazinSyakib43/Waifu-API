import express from "express";
import bodyParser from "body-parser";

import waifuRoutes from "./routes/waifus.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/waifus", waifuRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
