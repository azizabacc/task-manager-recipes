const fs = require('fs');

// Lire le fichier JSON
const jsonString = fs.readFileSync('recipes.json', 'utf8');

// Convertir le contenu JSON en objet JavaScript
const recipes = JSON.parse(jsonString);

// Exporter l'objet recipes
module.exports = { recipes };