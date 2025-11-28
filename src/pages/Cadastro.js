import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState("login"); // ou "register"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome.trim() || !senha.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    const endpoint = modo === "login" ? "/login" : "/register";

    try {
      const res = await fetch(`http://localhost:3001${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erro");
        return;
      }

      sessionStorage.setItem("usuarioLogado", nome);
      navigate("/");
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="form-box">
      <h2>{modo === "login" ? "👤 Entrar" : "📝 Criar Conta"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="form-button" type="submit">
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        {modo === "login" ? "Não tem conta?" : "Já tem conta?"}{" "}
        <span
          onClick={() => setModo(modo === "login" ? "register" : "login")}
          style={{
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {modo === "login" ? "Criar uma agora" : "Entrar"}
        </span>
      </p>
    </div>
  );
}

export default Cadastro;
