const express = require('express');
const pets = require('./dataBase.js');
console.log(pets)

const app = express();

const PORT = 3000;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

app.get('/api/v1/pets/owner', (req, res) => { 
    const {owner} = req.query; 
    const filtered = pets.filter(pet => pet.owner.toLowerCase() === owner.toLowerCase());
    res.send(filtered); 
});
//http://localhost:3000/api/v1/pets/owner?owner=john  this is how you type in the query to filter a few new options

app.get('/api/v1/pets', (req, res) => {res.send(pets); });

app.get('/api/v1/pets/:name', (req, res) => { 
const {name} = req.params; 
const filtered = pets.filter(pet => pet.name.toLowerCase() === name.toLowerCase());
res.send(filtered); });

