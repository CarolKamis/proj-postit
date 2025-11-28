# 📒 Post-it Viagens

## 1. Identificação e Contexto do Projeto

**Integrantes:**

* Gabriel Vinicius Moreno Costa
* Kamilly Caroline Lourenço Santos
* Henrique Katauchi
* Valentina Alves dos Santos

**Objetivo:**
Post-it Viagens é um sistema para registrar e compartilhar experiências de viagem, incluindo fotos, descrições e informações de lugares via Wikipedia. O sistema organiza memórias de viagem de forma simples e rápida.

**Público-alvo:**
Viajantes, estudantes de turismo e pessoas que gostam de registrar experiências de viagem.

**Repositório:**
[Link do Repositório GitHub/GitLab](#https://github.com/CarolKamis/proj-postit/edit/main/README.md)

---

## 2. Requisitos e Arquitetura

**Requisitos Funcionais:**

* Criar, editar, excluir e listar publicações.
* Pesquisar posts pelo título.
* Buscar informações de lugares na Wikipedia.
* Upload de imagens com pré-visualização.

**Requisitos Não Funcionais:**

* Performance rápida e responsiva.
* Design limpo e usabilidade intuitiva.
* Validação de campos obrigatórios no backend.

**API Externa:**

* **Wikipedia REST API**

  * Endpoint: `https://en.wikipedia.org/api/rest_v1/page/summary/{nome_do_lugar}`
  * Retorna resumo, imagem e informações do lugar pesquisado.

**Arquitetura:**

```
Frontend (React)
   |
   └─ fetch → Backend (Node.js + Express)
             |
             └─ Lê/escreve em data.json
             └─ Consulta API externa (Wikipedia)
```

---

## 3. Frontend

* Estrutura criada com React: `App.js`, `Home.js`, `NovaPublicacao.js`.
* Tela inicial mostrando posts do backend.
* Navegação entre Início e + Nova Publicação.
* Uso de `useState` e `useEffect` para gerenciamento de estado.

**Rodando o Frontend:**

```bash
cd frontend
npm install
npm start
```

O frontend será aberto em: [http://localhost:3000](http://localhost:3000)

---

## 4. Backend

O backend é construído com Node.js e Express, rodando na porta 3001, com rotas CRUD completas:

* `GET /posts` → Listar todos os posts
* `POST /posts` → Criar um novo post
* `PUT /posts/:id` → Editar um post específico
* `DELETE /posts/:id` → Remover posts

Integração com a Wikipedia API para buscar informações externas sobre os lugares. Todos os dados são armazenados em um arquivo JSON local.

**Rodando o Backend:**

```bash
cd backend
npm install
node server.js
```

O backend estará disponível em: [http://localhost:3001](http://localhost:3001)

---

## 5. Funcionalidades Principais

* CRUD completo de publicações.
* Pesquisa de posts por título.
* Consulta a informações externas via Wikipedia.
* Atualização automática do frontend após ações no backend.
* Validação de dados obrigatórios (ex.: título do post) e mensagens de erro apropriadas.

---

## 6. Recursos Avançados e Usabilidade

* Upload de imagens com pré-visualização antes de salvar.
* Remoção individual de informações da Wikipedia.
* Tratamento de erros no frontend e backend.
* Interface limpa, responsiva e intuitiva.
* Chamadas à API externa otimizadas com atualização em tempo real do frontend.

---

## 7. Endpoints da API

**Backend (CRUD):**

* `GET /posts` → Listar todos os posts
* `POST /posts` → Criar novos posts
* `PUT /posts/:id` → Editar posts existentes
* `DELETE /posts/:id` → Remover posts

**API Externa:**

* Wikipedia REST API: `https://en.wikipedia.org/api/rest_v1/page/summary/{nome_do_lugar}`

Todos os endpoints podem ser testados via frontend ou ferramentas como Postman/Insomnia.

---

## 8. Como Usar

1. Rode o backend:

```bash
cd backend
npm install
node server.js
```

2. Rode o frontend:

```bash
cd frontend
npm install
npm start
```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador para:

* Criar, editar e excluir publicações.
* Buscar informações de lugares.
* Fazer upload de imagens.
* Visualizar feedback em tempo real das ações realizadas.

```
## 9. Cadastro, Login e Autenticação

O sistema permite que usuários criem contas e façam login para acessar funcionalidades completas do app, como criar, editar e excluir publicações.

Funcionalidades do sistema de autenticação:

Tela de Cadastro/Login unificada, alternando entre os modos.

Armazenamento do login no sessionStorage.

Exibição do nome do usuário logado no topo da tela, com saudação e botão de sair.

Proteção visual: botão “Nova Publicação” só aparece para usuários logados.

Os dados dos usuários são armazenados no arquivo usuarios.json no backend.

⚠️ Nota: As senhas não são criptografadas (para fins educacionais).

Endpoints de autenticação:

POST /register – Cria um novo usuário

POST /login – Realiza login com nome e senha

---

## 🎨 10. Estilo Visual e Experiência do Usuário

O projeto usa um design jovem, limpo e “fofinho”, ideal para um app de memórias de viagem. Algumas características:

Fonte personalizada: Kalam, estilo manuscrito.

Cores suaves (pastel) e degradês no header.

Cards de postagens com efeito de hover.

Imagens com bordas arredondadas e sombra.

Layout totalmente responsivo, adaptável para celular.

---

## 💻 11. Estrutura de Arquivos
📂 frontend/
App.js
index.js
index.css
/pages/
  ├── Home.js
  ├── Cadastro.js
  └── NovaPublicacao.js

📂 backend/
server.js
data.json          ← Armazena os posts
usuarios.json      ← Armazena os usuários

---

## 🛠️ 12. Tecnologias Utilizadas
Tecnologia	Uso
React JS	Interface do usuário (SPA)
Node.js	Backend e servidor local
Express	Rotas da API REST
fetch API	Requisições HTTP entre frontend/backend
Wikipedia REST API	Consulta automática de lugares
CSS	Estilização customizada

---

## 🧪 13. Testando com Postman ou curl
Registrar novo usuário:
curl -X POST http://localhost:3001/register \
  -H "Content-Type: application/json" \
  -d '{"nome": "meuusuario", "senha": "1234"}'

Fazer login:
curl -X POST http://localhost:3001/login \
  -H "Content-Type: application/json" \
  -d '{"nome": "meuusuario", "senha": "1234"}'

  ---

## 🚀 14. Futuras Melhorias (sugestões)

Criptografia de senha (com bcrypt)

Banco de dados em vez de arquivos .json

Rota de logout explícita

Filtro por tags ou categorias de viagem

Animações suaves usando Framer Motion
