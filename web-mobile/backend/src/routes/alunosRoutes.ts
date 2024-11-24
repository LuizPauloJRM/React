import express from 'express';
import { getAlunos, createAluno } from '../controllers/alunoControllers'; 

const router = express.Router();

router.get('/', getAlunos);
router.post('/', createAluno);

export { router as alunoRoutes };
