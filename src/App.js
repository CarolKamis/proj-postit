import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NovaPublicacao from "./pages/NovaPublicacao";
import Cadastro from "./pages/Cadastro";
import "./index.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("usuarioLogado");
    if (user) setUsuario(user);

    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, []);

  const adicionarPost = async (novoPost) => {
    const res = await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoPost),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };

  const editarPost = async (id, postEditado) => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postEditado),
    });
    const data = await res.json();
    setPosts(posts.map((p) => (p.id === id ? data : p)));
  };

  const excluirPost = async (id) => {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    });
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    setUsuario(null);
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="app">
<header className="header">
  <h1>📒 Post-it Viagens</h1>

  {/* Bloco de usuário logado no canto direito */}
  {usuario && (
    <div className="user-info-header">
      <p>👋 Olá, <strong>{usuario}</strong>!</p>
      <button onClick={handleLogout} className="logout-btn">🚪 Sair</button>
    </div>
  )}

  <nav className="nav">
    <Link to="/">🏠 Início</Link>
    {usuario && <Link to="/nova">➕ Nova Publicação</Link>}
    {!usuario && <Link to="/cadastro">👤 Entrar</Link>}
  </nav>
</header>

        {/* Conteúdo principal */}
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  posts={posts}
                  editarPost={editarPost}
                  excluirPost={excluirPost}
                />
              }
            />
            <Route
              path="/nova"
              element={<NovaPublicacao adicionarPost={adicionarPost} />}
            />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} Post-it ✈️
        </footer>
      </div>
    </Router>
  );
}

export default App;
