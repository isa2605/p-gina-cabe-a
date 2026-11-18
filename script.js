/* Configurações gerais: fundo azul bebê e fonte Arial */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #BFEFFF; /* Azul bebê */
  font-family: Arial, Helvetica, sans-serif;
  color: #24292f;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

code {
  background-color: #eff1f3;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

/* Cabeçalho estilo GitHub */
.github-header {
  background-color: #24292f;
  color: #ffffff;
  padding: 14px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid #30363d;
}

.header-esquerda {
  display: flex;
  align-items: center;
  gap: 10px;
}

.github-icon {
  color: #ffffff;
}

.repo-nome {
  font-size: 1rem;
  color: #d0d7de;
}

.repo-nome strong {
  color: #ffffff;
}

.badge-publico {
  font-size: 0.75rem;
  color: #8b949e;
  border: 1px solid #484f58;
  border-radius: 12px;
  padding: 1px 8px;
}

.header-centro input {
  background-color: #0d1117;
  color: #ffffff;
  border: 1px solid #484f58;
  border-radius: 6px;
  padding: 6px 12px;
  width: 280px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
}

.header-centro input::placeholder {
  color: #8b949e;
}

.header-centro input:focus {
  outline: none;
  border-color: #58a6ff;
}

.header-nav {
  display: flex;
  gap: 16px;
}

.header-nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
}

.header-nav a:hover {
  color: #58a6ff;
}

/* Área principal */
.container {
  width: 100%;
  max-width: 960px;
  margin: 28px auto;
  padding: 0 20px;
  flex: 1;
}

/* Título centralizado */
.hero-titulo {
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 28px 20px;
  margin-bottom: 20px;
}

.titulo-central {
  text-align: center;
  font-size: 2.5rem;
  color: #1f2328;
  margin-bottom: 8px;
}

.subtitulo-central {
  color: #57606a;
  font-size: 0.98rem;
}

/* Barra de botões interativos */
.barra-controles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}

.btn-github,
.btn-limpar {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  cursor: pointer;
}

.btn-github {
  background-color: #f6f8fa;
  color: #24292f;
}

.btn-github:hover {
  background-color: #eaeef2;
}

.btn-limpar {
  background-color: #24292f;
  color: #ffffff;
  border-color: #24292f;
}

.btn-limpar:hover {
  background-color: #32383f;
}

/* Cards estilo repositório / README.md */
.card-github {
  background-color: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  margin-bottom: 20px;
  overflow: hidden;
}

.card-topo {
  background-color: #f6f8fa;
  border-bottom: 1px solid #d0d7de;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.texto-suave {
  color: #57606a;
  font-size: 0.85rem;
}

.lista-arquivos {
  list-style: none;
}

.lista-arquivos li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #d8dee4;
  font-size: 0.92rem;
}

.lista-arquivos li:last-child {
  border-bottom: none;
}

.lista-arquivos li:hover {
  background-color: #f6f8fa;
}

.arquivo-nome {
  font-weight: bold;
  color: #0969da;
}

.arquivo-desc {
  color: #57606a;
}

/* Conteúdo do README */
.readme-corpo {
  padding: 20px;
}

.bloco-explicacao {
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #d8dee4;
}

.bloco-explicacao:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.bloco-explicacao h2 {
  font-size: 1.15rem;
  margin-bottom: 6px;
  color: #1f2328;
}

.bloco-explicacao p {
  color: #424a53;
  font-size: 0.95rem;
}

/* Destaque ativado pelo script.js */
.destaque-ativo {
  outline: 4px solid #0969da;
  box-shadow: 0 0 16px rgba(9, 105, 218, 0.35);
  transition: outline 0.2s ease, box-shadow 0.2s ease;
}

.oculto {
  display: none;
}

.mensagem-vazia {
  text-align: center;
  color: #57606a;
  padding: 12px;
  font-style: italic;
}

/* Rodapé estilo GitHub */
.github-footer {
  background-color: #f6f8fa;
  border-top: 1px solid #d0d7de;
  padding: 20px 24px;
  margin-top: auto;
  font-size: 0.9rem;
  color: #57606a;
}

.footer-conteudo {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.footer-links {
  display: flex;
  gap: 16px;
  align-items: center;
}

.footer-links a {
  color: #0969da;
  text-decoration: none;
  font-weight: bold;
}

.footer-links a:hover {
  text-decoration: underline;
}
