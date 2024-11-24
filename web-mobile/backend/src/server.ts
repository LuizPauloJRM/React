import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Ajuste no caminho para a importação das rotas
import { alunoRoutes } from './routes/alunosRoutes';

const app = express();

app.use(express.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro de conexão com o MongoDB', err));


// Definir as rotas
app.use('/api/alunos', alunoRoutes);

// Definir a porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
