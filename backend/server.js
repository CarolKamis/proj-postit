const express = require("express");
const cors = require("cors");
const fs = require("fs");
const fetch = require("node-fetch");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = "data.json";

// ✅ Listar todos os posts
app.get("/posts", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data.posts);
});

// ✅ Criar um novo post
app.post("/posts", (req, res) => {
  const novoPost = req.body;
  if (!novoPost.titulo) {
    return res.status(400).json({ error: "O título é obrigatório" });
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  novoPost.id = data.posts.length + 1;
  data.posts.push(novoPost);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json(novoPost);
});

// ✅ Editar um post
app.put("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const index = data.posts.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Post não encontrado" });

  data.posts[index] = { id, ...req.body };
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json(data.posts[index]);
});

// ✅ Deletar um post
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.posts = data.posts.filter(p => p.id !== id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Post deletado" });
});

const USUARIOS_FILE = "usuarios.json";

const carregarUsuarios = () => {
  if (!fs.existsSync(USUARIOS_FILE)) fs.writeFileSync(USUARIOS_FILE, JSON.stringify({ usuarios: [] }, null, 2));
  return JSON.parse(fs.readFileSync(USUARIOS_FILE));
};

const salvarUsuarios = (data) => {
  fs.writeFileSync(USUARIOS_FILE, JSON.stringify(data, null, 2));
};

// Registro
app.post("/register", (req, res) => {
  const { nome, senha } = req.body;
  if (!nome || !senha) return res.status(400).json({ error: "Nome e senha obrigatórios" });

  const data = carregarUsuarios();
  const jaExiste = data.usuarios.some(u => u.nome === nome);

  if (jaExiste) return res.status(400).json({ error: "Usuário já existe" });

  data.usuarios.push({ nome, senha });
  salvarUsuarios(data);
  res.json({ sucesso: true });
});

// Login
app.post("/login", (req, res) => {
  const { nome, senha } = req.body;
  const data = carregarUsuarios();
  const usuario = data.usuarios.find(u => u.nome === nome && u.senha === senha);

  if (!usuario) return res.status(401).json({ error: "Usuário ou senha inválidos" });

  res.json({ sucesso: true });
});


// ✅ Rota de tradução
app.post("/traduzir", async (req, res) => {
  const { texto } = req.body;

  try {
    const resposta = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: texto,
        source: "en",
        target: "pt",
        format: "text"
      }),
    });

    const resultado = await resposta.json();
    res.json({ traducao: resultado.translatedText });
  } catch (erro) {
    console.error("Erro ao traduzir:", erro);
    res.status(500).json({ error: "Erro na tradução" });
  }
});

// ✅ Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);

  // Aguarde um pequeno tempo para o Express registrar as rotas
  setTimeout(() => {
    if (app._router && app._router.stack) {
      app._router.stack.forEach((middleware) => {
        if (middleware.route && middleware.route.path) {
          console.log("📌 Rota ativa:", middleware.route.path);
        }
      });
    } else {
      console.warn("⚠️ Não foi possível listar as rotas. Express pode não ter carregado ainda.");
    }
  }, 100); // 100ms de espera
});
