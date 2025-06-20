Helpdesk Page - Sistema de Chamados
📌 Descrição
Esta página foi desenvolvida para gerenciar um sistema de suporte técnico (Helpdesk), permitindo a criação, consulta, atualização e exclusão de usuários e chamados.

🚀 Tecnologias Utilizadas
HTML

CSS

JavaScript

Node.js

Express.js

Swagger (documentação da API)

JSON (banco de dados local)

📂 Estrutura do Projeto
pgsql
Copiar
Editar
/helpdesk-api
│── data/
│   ├── users.json       # Banco de dados de usuários
│   ├── tickets.json     # Banco de dados de chamados
│── scripts/
│   ├── index.js
│   ├── ticketsCard.js
│   ├── usersCard.js
│── style/
│   ├── card.css
│   ├── common.css
│   ├── form.css
│   ├── header.css
│   ├── modal.css
│── swagger/
│   ├── swagger.json     # Documentação Swagger
│── view/
│   ├── login.html
│   ├── signUp.html
│   ├── ticket.html
│   ├── user.css
│── server.cjs           # Arquivo principal da API
│── package.json         # Dependências do projeto
│── README.md            # Documentação do projeto
🔧 Instalação e Execução
1️⃣ Clone o repositório
bash
Copiar
Editar
git clone https://github.com/automacaohml/helpdesk-page.git
cd helpdesk-page
2️⃣ Instale as dependências
bash
Copiar
Editar
npm install
3️⃣ Inicie a API
bash
Copiar
Editar
node server.cjs
-- A API estará rodando em `http://localhost:3000`
4️⃣ Acesse a página
Você pode acessar a interface utilizando a extensão Live Server do Visual Studio Code.

📌 Endpoints da API
🔹 Autenticação
Método	Rota	Descrição
POST	/login	Realiza login na página
POST	/register	Realiza cadastro
POST	/logout	Realiza logout

🔹 Usuários
Método	Rota	Descrição
GET	/users	Lista todos os usuários
GET	/users/:id	Busca usuário pelo ID
POST	/users	Cria novo usuário
PUT	/users/:id	Atualiza dados do usuário
DELETE	/users/:id	Deleta usuário

🔹 Chamados (Tickets)
Método	Rota	Descrição
POST	/tickets	Cria novo chamado
GET	/tickets/:id	Busca chamado pelo ID
PUT	/tickets/:id/status	Atualiza o status do chamado
DELETE	/tickets/:id	Exclui um chamado

---
📖 Documentação Swagger
A API possui documentação interativa gerada com Swagger, facilitando a visualização e testes dos endpoints disponíveis.
