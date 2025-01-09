// Importation des modules
const express = require('express');

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Route par défaut     //app.get --> localhost:3000/
app.get('/', (req, res) => {            //req sy res => azo ovaina
    res.send('Hello, Express!');
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});