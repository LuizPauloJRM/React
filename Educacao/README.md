# Conexão Aluno-Professor - Web e Mobile

Este projeto é uma aplicação Full-Stack desenvolvida para facilitar a conexão entre alunos e professores. A aplicação permite que professores registrem aulas, incluindo informações como disciplina, custo e horário, enquanto os alunos podem buscar por aulas disponíveis de acordo com suas necessidades.

## Tecnologias Utilizadas
- **Frontend Web**: ReactJS + TypeScript
- **Aplicativo Mobile**: React Native + Expo
- **Backend**: Node.js + Express + TypeScript
- **Comunicação entre Frontend e Backend**: Axios
- **Banco de Dados**: A ser definido (MongoDB, PostgreSQL ou MySQL)

---

## Funcionalidades
### Professores
- Cadastro e login.
- Registro de aulas com:
  - Nome da disciplina.
  - Valor da aula.
  - Horário disponível.
- Gerenciamento das aulas registradas.

### Alunos
- Cadastro e login.
- Busca de aulas com filtros por disciplina, preço e horário.
- Sistema de favoritos para salvar aulas.

---

## Estrutura do Projeto
### Backend
Localizado na pasta `server`.
- **Endpoints principais**:
  - `POST /auth/register`: Cadastro de usuários.
  - `POST /auth/login`: Login de usuários.
  - `POST /classes`: Registro de aulas (somente para professores).
  - `GET /classes`: Busca de aulas com filtros (alunos).
  - `PUT /classes/:id`: Atualização de aulas.
  - `DELETE /classes/:id`: Remoção de aulas.
- **Ferramentas utilizadas**:
  - Express para criar as APIs.
  - TypeORM (ou Mongoose) para gerenciamento do banco de dados.
  - JWT para autenticação.

### Frontend Web
Localizado na pasta `web`.
- **Páginas principais**:
  - Login e registro de usuários.
  - Dashboard do professor para registrar e gerenciar aulas.
  - Tela de busca para alunos com filtros.
- **Bibliotecas adicionais**:
  - React Router Dom para navegação.
  - Tailwind CSS ou Material-UI para estilização.

### Aplicativo Mobile
Localizado na pasta `mobile`.
- **Telas principais**:
  - Login e registro.
  - Lista de aulas disponíveis com filtros interativos.
  - Tela de detalhes da aula com opção de favoritar.
- **Ferramentas utilizadas**:
  - Expo para simplificar o desenvolvimento mobile.
  - React Navigation para navegação.

---

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js (v16 ou superior).
- NPM ou Yarn.
- Expo CLI para o aplicativo mobile.
- Banco de dados (MongoDB/PostgreSQL/MySQL).

### Backend
1. Acesse a pasta `server`:
   ```bash
   cd server
Instale as dependências:
bash
Copiar código
npm install
Configure o arquivo .env com as variáveis:
makefile
Copiar código
DATABASE_URL=<sua_url_do_banco>
JWT_SECRET=<sua_chave_secreta>
Execute o servidor:
bash
Copiar código
npm run dev
Frontend Web
Acesse a pasta web:
bash
Copiar código
cd web
Instale as dependências:
bash
Copiar código
npm install
Execute o projeto:
bash
Copiar código
npm start
Aplicativo Mobile
Acesse a pasta mobile:
bash
Copiar código
cd mobile
Instale as dependências:
bash
Copiar código
npm install
Inicie o projeto com Expo:
bash
Copiar código
expo start
Estrutura de Pastas
bash
Copiar código
project-root/
├── server/          # Backend
├── web/             # Frontend Web
└── mobile/          # Aplicativo Mobile
