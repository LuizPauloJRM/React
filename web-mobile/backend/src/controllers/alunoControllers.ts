import { Request, Response } from 'express';
import Aluno from '../models/alunoModel';

export const getAlunos = async (req: Request, res: Response) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const createAluno = async (req: Request, res: Response) => {
  const aluno = new Aluno({
    nome: req.body.nome,
    idade: req.body.idade,
  });

  try {
    const newAluno = await aluno.save();
    res.status(201).json(newAluno);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
