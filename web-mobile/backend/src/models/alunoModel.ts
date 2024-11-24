import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
});

const Aluno = mongoose.model('Aluno', alunoSchema);

export default Aluno;
