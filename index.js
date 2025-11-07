const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;


const palabras = fs.readFileSync('diccionario.txt', 'utf-8')
    .split(/\r?\n/)
    .filter(Boolean);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const queryObject = url.parse(req.url, true).query;
    const numPalabras = parseInt(queryObject.x) || 3; // valor por defecto = 3


    let seleccionadas = [];
    for (let i = 0; i < numPalabras; i++) {
        const rand = Math.floor(Math.random() * palabras.length);
        seleccionadas.push(palabras[rand]);
    }
    const password = seleccionadas.join('-');

    res.write(`<h1>Contraseña generada (${numPalabras} palabras):</h1>`);
    res.write(`<p><b>${password}</b></p>`);
    res.write(`<p>Ejemplo: <a href="/?x=5">Generar con 5 palabras</a></p>`);
    res.end();
});

server.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
