const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Hello Friend!</h1><h2>It is final change</h2>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
