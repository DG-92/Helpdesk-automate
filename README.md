# Helpdesk-automate - Sistema de Chamados<br> 
📌 Descrição<br> 
Esta página foi desenvolvida para gerenciar um sistema de suporte técnico (Helpdesk), permitindo a criação, consulta, atualização e exclusão de usuários e chamados.

🚀 Tecnologias Utilizadas<br> 
HTML<br> 

CSS<br> 

JavaScript<br> 

Node.js<br> 

Express.js<br> 

Swagger (documentação da API)<br> 

JSON (banco de dados local)<br> 

📂 Estrutura do Projeto
pgsql
Copiar
Editar
/helpdesk-api<br> 
│── data/<br> 
│   ├── users.json       # Banco de dados de usuários<br> 
│   ├── tickets.json     # Banco de dados de chamados<br> 
│── scripts/<br> 
│   ├── index.js<br> 
│   ├── ticketsCard.js<br> 
│   ├── usersCard.js<br> 
│── style/<br> 
│   ├── card.css<br> 
│   ├── common.css<br> 
│   ├── form.css<br> 
│   ├── header.css<br> 
│   ├── modal.css<br> 
│── swagger/<br> 
│   ├── swagger.json     # Documentação Swagger<br> 
│── view/<br> 
│   ├── login.html<br> 
│   ├── signUp.html<br> 
│   ├── ticket.html<br> 
│   ├── user.css<br> 
│── server.cjs           # Arquivo principal da API<br> 
│── package.json         # Dependências do projeto<br> 
│── README.md            # Documentação do projeto<br> 


🔧 Instalação e Execução<br> 
1️⃣ Clone o repositório<br> 
bash<br> 
Copiar<br> 
Editar<br> 
git clone https://github.com/automacaohml/helpdesk-page.git<br> 
cd helpdesk-page<br> 
2️⃣ Instale as dependências<br> 
bash<br> 
Copiar<br> 
Editar<br> 
npm install<br> 
3️⃣ Inicie a API<br> 
bash<br> 
Copiar<br> 
Editar<br> 
node server.cjs
-- A API estará rodando em `http://localhost:3000`<br> 
4️⃣ Acesse a página<br> 
Você pode acessar a interface utilizando a extensão Live Server do Visual Studio Code.<br> 

📌 Endpoints da API<br> 
🔹 Autenticação<br> 
Método	Rota	Descrição<br> 
POST	/login	Realiza login na página<br> 
POST	/register	Realiza cadastro<br> 
POST	/logout	Realiza logout<br> 

🔹 Usuários<br> 
Método	Rota	Descrição<br> 
GET	/users	Lista todos os usuários<br> 
GET	/users/:id	Busca usuário pelo ID<br> 
POST	/users	Cria novo usuário<br> 
PUT	/users/:id	Atualiza dados do usuário<br> 
DELETE	/users/:id	Deleta usuário<br> 

🔹 Chamados (Tickets)<br> 
Método	Rota	Descrição<br> 
POST	/tickets	Cria novo chamado<br> 
GET	/tickets/:id	Busca chamado pelo ID<br> 
PUT	/tickets/:id/status	Atualiza o status do chamado<br> 
DELETE	/tickets/:id	Exclui um chamado<br> 

---<br> 
📖 Documentação Swagger<br> 
A API possui documentação interativa gerada com Swagger, facilitando a visualização e testes dos endpoints disponíveis.<br> 
