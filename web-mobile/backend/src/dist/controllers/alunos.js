"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Rota para buscar aulas disponíveis
router.get('/', (req, res) => {
    res.send('Lista de aulas disponíveis');
});
exports.default = router;
