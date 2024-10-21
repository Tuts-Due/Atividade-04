// server.js
const express = require('express');
const cors = require('cors');
const testimonials = require('./testimonials'); // Importando o arquivo testimonials.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para obter os testemunhos
app.get('/api/testimonials', (req, res) => {
    res.json(testimonials); // Retorna os dados dos testemunhos
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
