// src/services/alunoService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/alunos'; // Altere para a URL do seu backend

// Função para pegar a lista de alunos
export const getAlunos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    return [];
  }
};

// Função para adicionar um aluno
export const addAluno = async (aluno: { nome: string, idade: number }) => {
  try {
    const response = await axios.post(API_URL, aluno);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar aluno:', error);
    return null;
  }
};
