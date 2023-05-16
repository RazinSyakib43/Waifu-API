import express from "express";

const router = express.Router();

const waifus = [
  {
    name: "Mitsuha Miyamizu",
    anime: "Kimi no Nawa",
    age: 17,
  },
  {
    name: "Kato Megumi",
    anime: "Saenai Heroine no Sodatekata",
    age: 17,
  },
];

router.get("/", (req, res) => {
  console.log(waifus);
  res.send(waifus);
});

export default router;
