📒 Post-it 
1. Identificação e Contexto do Projeto

Integrantes:
Gabriel Vinicius Moreno Costa
Kamilly Caroline Lourenço Santos
Henrique Katauchi
Valentina Alves dos Santos

Objetivo:
Post-it Viagens é um sistema para registrar e compartilhar memórias de viagem, permitindo adicionar fotos, descrições, locais e informações automáticas via Wikipedia.

Público-alvo:
Viajantes, estudantes de turismo e pessoas que gostam de guardar experiências de forma simples e visual.

Repositório:
Link do Repositório GitHub

2. Requisitos e Arquitetura
Requisitos Funcionais

Criar, editar, excluir e listar publicações.

Pesquisar posts pelo título.

Exibir informações de lugares usando Wikipédia.

Upload de imagens com pré-visualização.

Requisitos Não Funcionais

Interface intuitiva e responsiva.

Boa performance.

Backend com validação de campos.

API Externa

Wikipedia REST API:
https://en.wikipedia.org/api/rest_v1/page/summary/{nome_do_lugar}

Arquitetura
Frontend (React)
   |
   └── Backend (Node + Express)
         │
         ├── Arquivo data.json
         └── API Externa (Wikipedia)

3. Frontend

Construído em React.

Tela inicial exibe todos os posts vindos do backend.

Navegação entre Home e Nova Publicação.

Estados e efeitos usando useState e useEffect.

Rodar o Frontend:

cd frontend
npm install
npm start


Acesse: http://localhost:3000

4. Backend

Criado com Node.js e Express.

CRUD completo: criar, listar, editar e excluir posts.

Integração com Wikipedia.

Armazenamento em data.json.

Rotas:

GET /posts

POST /posts

PUT /posts/:id

DELETE /posts/:id

Rodar o Backend:

cd backend
npm install
node server.js


Backend: http://localhost:3001

5. Funcionalidades Principais

CRUD completo.

Busca por título.

Informações de lugares via API externa.

Upload de imagens com preview.

Mensagens de erro e validações.

6. Usabilidade e Recursos Extras

Preview de imagens antes de salvar.

Remoção de informações da Wikipedia.

Tratamento de erros no frontend e backend.

Layout simples, responsivo e intuitivo.

7. Endpoints da API
CRUD

GET /posts

POST /posts

PUT /posts/:id

DELETE /posts/:id

API Externa

Wikipedia REST API: /page/summary/{nome}

8. Como Usar o Sistema

Iniciar backend:

cd backend
node server.js


Iniciar frontend:

cd frontend
npm start


Acessar o app: http://localhost:3000

A partir disso, é possível criar, editar e remover publicações, buscar lugares e fazer upload de imagens.

9. Cadastro, Login e Autenticação

O sistema possui autenticação simples para liberar funções completas.

Recursos:

Tela unificada de Login/Cadastro.

Nome do usuário visível no topo.

Botão “Nova Publicação” só aparece quando logado.

Sessão salva em sessionStorage.

Armazenamento dos usuários em usuarios.json.

⚠️ Atenção: senhas não são criptografadas (uso educativo).

Endpoints:

POST /register

POST /login

🎨 10. Estilo Visual

Fonte manuscrita Kalam.

Cores suaves (pastel).

Cards com hover e sombras leves.

Imagens arredondadas.

Layout responsivo.

💻 11. Estrutura de Arquivos
frontend/
  App.js
  index.js
  index.css
  /pages
    Home.js
    Cadastro.js
    NovaPublicacao.js

backend/
  server.js
  data.json
  usuarios.json

🛠️ 12. Tecnologias Utilizadas
Tecnologia	Uso
React JS	Interface do usuário
Node.js	Backend
Express	Rotas da API
fetch API	Comunicação
Wikipedia REST API	Informações externas
CSS	Estilização
🧪 13. Testes (Postman / cURL)

Registrar usuário:

curl -X POST http://localhost:3001/register \
  -H "Content-Type: application/json" \
  -d '{"nome":"usuario","senha":"1234"}'


Login:

curl -X POST http://localhost:3001/login \
  -H "Content-Type: application/json" \
  -d '{"nome":"usuario","senha":"1234"}'

🚀 14. Futuras Melhorias

Criptografia de senha.

Banco de dados real (MongoDB / PostgreSQL).

Logout dedicado.

Filtro por categorias.

Animações com Framer Motion.
