## Tecnologias Utilizadas

- **Front-End**: React, TypeScript, Axios, React Router, Tailwind CSS
- **Back-End**: Node.js, Express, TypeScript
- **Banco de Dados**: [Escolher um banco de dados, como MongoDB ou PostgreSQL]
- **Autenticação**: JWT (JSON Web Token)
  
## Funcionalidades

### Para Professores:
- Registrar novas aulas, incluindo informações como disciplina, custo e horário.
- Visualizar aulas registradas.
- Editar ou excluir aulas já cadastradas.

### Para Alunos:
- Pesquisar e visualizar aulas disponíveis.
- Inscrever-se em aulas (se aplicável).

### Funcionalidades Comuns:
- Autenticação de usuários (professores e alunos) utilizando JWT.
- Interface intuitiva e responsiva.
- Dashboards separados para professores e alunos.

## Requisitos

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**
- **MongoDB** ou **PostgreSQL** (dependendo da escolha do banco de dados)

## Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instalar dependências
Back-End
Navegue até o diretório do back-end:
bash
Copiar código
cd backend
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor:
bash
Copiar código
npm start
O back-end estará disponível em http://localhost:5000 (ou na porta configurada).

Front-End
Navegue até o diretório do front-end:
bash
Copiar código
cd frontend
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor:
bash
Copiar código
npm start
O front-end estará disponível em http://localhost:3000.

Estrutura do Projeto
Backend
src/controllers: Controladores responsáveis pelas regras de negócios.
src/routes: Definição das rotas da API.
src/models: Definições de modelos de dados.
src/services: Serviços auxiliares, como autenticação e interações com o banco de dados.
Frontend
src/components: Componentes reutilizáveis.
src/pages: Páginas principais (Login, Dashboard, etc).
src/services: Comunicação com a API utilizando Axios.
src/styles: Arquivos de estilos, incluindo configurações do Tailwind CSS.
Endpoints da API
POST /aulas
Registra uma nova aula para o professor.

Corpo da requisição:

json
Copiar código
{
  "disciplina": "Matemática",
  "custo": 100,
  "horario": "Segunda-feira às 10h",
  "professorId": "123"
}
Resposta:

json
Copiar código
{
  "message": "Aula registrada com sucesso!"
}
GET /aulas
Retorna todas as aulas registradas.

Resposta:

json
Copiar código
[
  {
    "id": "1",
    "disciplina": "Matemática",
    "custo": 100,
    "horario": "Segunda-feira às 10h",
    "professorId": "123"
  },
  {
    "id": "2",
    "disciplina": "Física",
    "custo": 120,
    "horario": "Terça-feira às 14h",
    "professorId": "124"
  }
]
POST /inscricao
Permite que um aluno se inscreva em uma aula.

Corpo da requisição:

json
Copiar código
{
  "aulaId": "1",
  "alunoId": "456"
}
Resposta:

json
Copiar código
{
  "message": "Inscrição realizada com sucesso!"
}
Contribuições
Contribuições são bem-vindas! Para contribuir:

Fork este repositório.
Crie uma nova branch para sua modificação (git checkout -b minha-modificacao).
Realize suas mudanças.
Envie um pull request.
Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

Contato
Email: seuemail@dominio.com
GitHub: seu-usuario