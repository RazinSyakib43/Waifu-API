import express from "express";
import bodyParser from "bodyParser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost${PORT}`)
);
