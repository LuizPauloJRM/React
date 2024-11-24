"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const _1 = __importDefault(require(".")); // Aqui estamos importando de './routes'
const app = (0, express_1.default)();
// Configurações
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Importar e usar as rotas
app.use('/api', _1.default); // Prefixando todas as rotas com "/api"
// Inicializar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
