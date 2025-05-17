
// Importa i moduli necessari
const express = require('express');
const app = express();

// Definisci una porta su cui il server ascolterà
const port = 443;

// Definisci una route per la root del sito
app.get('/', (req, res) => {
    res.send('Ciao, mondo!');
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
