const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        nombre: "Carlos Manuel Lima Y Lima",
        album_cancion: "The Way You Make Me Feel - Michael Jackson",
    });
});

app.listen(port, () => {
    console.log(`API Escuchando En http://localhost:${port}`);
});
