const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Docker!</h1>
    <img src="https://media.tenor.com/z3Vqx6hmE5QAAAAC/whale-docker.gif" alt="whale  moves"  width="250">
  `);
})

app.listen(3000);