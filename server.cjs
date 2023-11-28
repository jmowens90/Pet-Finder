const express = require('express');
const pets = require('./dataBase.js');
console.log(pets)

const app = express();

const PORT = 8080;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

app.get('/api/v1/pets', (req, res) => {res.send(pets); });

app.get('/api/v1/pets/:name', (req, res) => { const pet = req.params.name; res.send(pet); });

app.get('/api/v1/pets/:owner', (req, res) => { 
    const owner = req.params.owner; 
    const pet = pets.find(pet => pet.owner === owner);
    res.send(pet.name); });
