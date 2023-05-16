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

router.post("/", (req, res) => {
  const waifu = req.body;
  waifus.push(waifu);

  res.send(`Your waifu, ${waifu.name}, has been added to the list!`);
});

export default router;
