"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Rota para listar professores
router.get('/', (req, res) => {
    res.send('Lista de professores');
});
// Rota para registrar uma aula
router.post('/', (req, res) => {
    const { disciplina, custo, horario } = req.body;
    res.send(`Aula de ${disciplina} registrada com custo de R$${custo} às ${horario}`);
});
exports.default = router;
