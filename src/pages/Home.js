import React, { useState } from "react";
import "../index.css";

function Home({ posts, editarPost, excluirPost }) {
  const [editId, setEditId] = useState(null);
  const [editConteudo, setEditConteudo] = useState("");
  const [search, setSearch] = useState("");

  const usuarioLogado = sessionStorage.getItem("usuarioLogado");

  const handleEditar = (post) => {
    setEditId(post.id);
    setEditConteudo(post.conteudo || "");
  };

  const handleSalvar = async (id) => {
    const postEditado = {
      ...posts.find((p) => p.id === id),
      conteudo: editConteudo,
      autor: usuarioLogado
    };
    await editarPost(id, postEditado);
    setEditId(null);
  };

  const handleRemoverInfo = async (id) => {
    const postAtualizado = {
      ...posts.find((p) => p.id === id),
      infoLugar: null,
      autor: usuarioLogado
    };
    await editarPost(id, postAtualizado);
  };

  const postsFiltrados = posts.filter((post) =>
    post.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>📸 Feed de Viagens</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="🔎 Pesquise pelo título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {postsFiltrados.length === 0 && (
        <p style={{ textAlign: "center" }}>Nenhuma publicação encontrada.</p>
      )}

      {postsFiltrados.map((post) => {
        const podeEditar = post.autor === usuarioLogado;

        return (
          <div key={post.id} className="post-card">
            <h2>{post.titulo}</h2>

            {editId === post.id ? (
              <>
                <textarea
                  value={editConteudo}
                  onChange={(e) => setEditConteudo(e.target.value)}
                  className="edit-textarea"
                />
                <button onClick={() => handleSalvar(post.id)} className="btn-success">
                  💾 Salvar
                </button>
                <button onClick={() => setEditId(null)} className="btn-danger">
                  ❌ Cancelar
                </button>
              </>
            ) : (
              <>
                {post.conteudo && <p>{post.conteudo}</p>}

                {post.imagem && (
                  <img src={post.imagem} alt={post.titulo} className="post-img" />
                )}

                {post.infoLugar && (
                  <div className="info-box">
                    <h4>{post.infoLugar.titulo}</h4>
                    {post.infoLugar.imagem && (
                      <img
                        src={post.infoLugar.imagem}
                        alt={post.infoLugar.titulo}
                      />
                    )}
                    <p>{post.infoLugar.descricao}</p>
                    {podeEditar && (
                      <button
                        onClick={() => handleRemoverInfo(post.id)}
                        className="btn-danger"
                      >
                        🗑 Remover Info Wikipedia
                      </button>
                    )}
                  </div>
                )}

                <small>
                  Publicado em: {post.data}
                  {post.autor && ` • Autor: ${post.autor}`}
                </small>

                {podeEditar && (
                  <>
                    <button
                      onClick={() => handleEditar(post)}
                      className="btn-primary"
                    >
                      ✏️ Editar Conteúdo
                    </button>
                    <button
                      onClick={() => excluirPost(post.id)}
                      className="btn-danger"
                    >
                      🗑 Excluir
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
