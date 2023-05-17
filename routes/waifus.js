import express from "express";
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';

const router = express.Router();

let waifus = [];

// Read data from waifus.json file
const readFileData = () => {
  const data = fs.readFileSync('./waifu.json', 'utf8');
  waifus = JSON.parse(data);
};

// Load initial data from waifus.json on server startup
readFileData();

router.get("/", (req, res) => {
  res.send(waifus);
});

router.post("/", (req, res) => {
  const waifu = req.body;

  const waifuWithId = { id:uuidv4(), ...waifu};

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

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, anime, age } = req.body;

  const waifu = waifus.find((waifu) => waifu.id === id);

  if(name) waifu.name = name;
  if(anime) waifu.anime = anime;
  if(age) waifu.age = age;

  res.send(`Waifu with the id ${id} has been updated`)
});

export default router;
