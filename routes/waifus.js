import express from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let waifus = [];

router.get("/", (req, res) => {
  console.log(waifus);
  res.send(waifus);
});

router.post("/", (req, res) => {
  const waifu = req.body;

  const waifuWithId = { ...waifu, id:uuidv4()};

  waifus.push(waifuWithId);

  res.send(`Your waifu, ${waifu.name}, has been added to the list!`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundWaifu = waifus.find((waifu) => waifu.id === id);

  res.send(foundWaifu);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  waifus = waifus.filter((waifu) => waifu.id !== id);

  res.send(`Waifu with the id ${id} knocked out from the list.`)
});

export default router;
