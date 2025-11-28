# 📒 **Post-it **

## 1️⃣ **Identificação e Contexto do Projeto**

**👥 Integrantes:**  
- Gabriel Vinicius Moreno Costa  
- Kamilly Caroline Lourenço Santos  
- Henrique Katauchi  
- Valentina Alves dos Santos  

**🎯 Objetivo:**  
O Post-it é um sistema para registrar e compartilhar memórias de viagem, com fotos, descrições e informações automáticas de lugares via Wikipedia.

**🎯 Público-alvo:**  
Viajantes e pessoas que gostam de registrar experiências de forma rápida, intuitiva e visual.

**📁 Repositório:**  
[🎒 Link do Repositório GitHub](https://github.com/CarolKamis/proj-postit)

---

## 2️⃣ **Requisitos e Arquitetura**

### ✔️ **Requisitos Funcionais**
- Cadastrar e logar conta
- Criar, editar, excluir e listar publicações  
- Buscar posts pelo título  
- Consultar informações externas (Wikipedia)  
- Upload de imagens com preview  

### ✔️ **Requisitos Não Funcionais**
- Interface simples e responsiva  
- Validações no backend  
- Boa performance  

### 🌐 **API Externa**
Wikipedia REST API:  
`https://en.wikipedia.org/api/rest_v1/page/summary/{nome_do_lugar}`

### 🧱 **Arquitetura do Sistema**
```
Frontend (React)
   |
   └── Backend (Node.js + Express)
         |
         ├── data.json (posts)
         └── usuarios.json (autenticação)
```

---

## 3️⃣ **Frontend**

- Criado com **React**  
- Home exibe posts salvos  
- Navegação entre Home e Nova Publicação  
- Estados e efeitos com `useState` e `useEffect`  

### ▶️ **Rodando o Frontend**
```bash
cd frontend
npm install
npm start
```

Acesse: **http://localhost:3000**

---

## 4️⃣ **Backend**

- Feito com **Node.js + Express**  
- CRUD completo  
- Consulta automática à Wikipedia  
- Dados armazenados em **data.json**

### 🔗 **Rotas do Backend**
- `GET /posts`  
- `POST /posts`  
- `PUT /posts/:id`  
- `DELETE /posts/:id`

### ▶️ **Rodando o Backend**
```bash
cd backend
npm install
node server.js
```

Disponível em: **http://localhost:3001**

---

## 5️⃣ **Funcionalidades Principais**

- CRUD completo de publicações  
- Pesquisa por título  
- Informações automáticas da Wikipedia  
- Upload de imagens com pré-visualização  
- Mensagens de erro e validação  

---

## 6️⃣ **Usabilidade e Recursos Extras**

- Remover informações importadas da Wikipedia  
- Tratamento de erros no frontend/backend  
- Interface limpa, suave e responsiva  
- Atualizações instantâneas dos posts  

---

## 7️⃣ **Endpoints da API**

### 🔧 CRUD
- `GET /posts`
- `POST /posts`
- `PUT /posts/:id`
- `DELETE /posts/:id`

### 🌍 API Externa  
- `https://en.wikipedia.org/api/rest_v1/page/summary/{nome}`

---

## 8️⃣ **Como Usar o Sistema**

1. Inicie o backend:
   ```bash
   cd backend
   node server.js
   ```

2. Inicie o frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Acesse o app: **http://localhost:3000**

---

## 9️⃣ **Cadastro, Login e Autenticação**

O sistema possui autenticação simples para liberar criação e edição de posts.

### 🔐 Recursos:
- Tela unificada de **Cadastro/Login**  
- Nome do usuário no topo  
- Botão “Nova Publicação” só aparece quando logado  
- Sessão salva no **sessionStorage**  
- Dados de usuários no arquivo **usuarios.json**

⚠️ *Senhas não são criptografadas (projeto educacional).*

### 🔗 Endpoints:
- `POST /register`
- `POST /login`

---

## 🎨 1️⃣0️⃣ Estilo Visual

- Fonte manuscrita **Kalam**  
- Cores suaves e degradê  
- Cards com sombra e hover  
- Layout totalmente responsivo  
- Imagens com bordas arredondadas  

---

## 💻 1️⃣1️⃣ Estrutura de Arquivos

```
📂 frontend/
  App.js
  index.js
  index.css
  /pages
    ├── Home.js
    ├── Cadastro.js
    └── NovaPublicacao.js

📂 backend/
  server.js
  data.json
  usuarios.json
```

---

## 🛠️ 1️⃣2️⃣ Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| React JS | Interface |
| Node.js | Backend |
| Express | Rotas |
| fetch API | Comunicação frontend/backend |
| Wikipedia REST API | Dados de locais |
| CSS | Estilização |

---

## 🧪 1️⃣3️⃣ Testes (Postman / cURL)

### Registrar usuário:
```bash
curl -X POST http://localhost:3001/register \
-H "Content-Type: application/json" \
-d '{"nome":"usuario","senha":"1234"}'
```

### Login:
```bash
curl -X POST http://localhost:3001/login \
-H "Content-Type: application/json" \
-d '{"nome":"usuario","senha":"1234"}'
```

---

## 🚀 1️⃣4️⃣ Futuras Melhorias

- Criptografia de senhas  
- Banco de dados (MongoDB/PostgreSQL)  
- Logout dedicado  
- Categorias e tags  
- Animações com Framer Motion  
