document.addEventListener("DOMContentLoaded", () => {
  const botoesLocalizar = document.querySelectorAll(".btn-github");
  const botaoLimpar = document.getElementById("btn-limpar");
  const campoBusca = document.getElementById("campo-busca");
  const itensFiltraveis = document.querySelectorAll(".card-filtravel");
  const mensagemVazia = document.getElementById("mensagem-vazia");

  // Remove o destaque visual de todas as seções
  function limparDestaques() {
    document.querySelectorAll(".destaque-ativo").forEach((elemento) => {
      elemento.classList.remove("destaque-ativo");
    });
  }

  // Rola até a seção escolhida e aplica uma borda azul de destaque
  botoesLocalizar.forEach((botao) => {
    botao.addEventListener("click", () => {
      const idAlvo = botao.getAttribute("data-alvo");
      const secao = document.getElementById(idAlvo);

      if (secao) {
        limparDestaques();
        secao.classList.add("destaque-ativo");
        secao.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // Botão para remover o destaque
  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", limparDestaques);
  }

  // Filtro de pesquisa em tempo real no cabeçalho
  if (campoBusca) {
    campoBusca.addEventListener("input", () => {
      const termo = campoBusca.value.toLowerCase().trim();
      let visiveis = 0;

      itensFiltraveis.forEach((item) => {
        const texto = (
          item.textContent +
          " " +
          (item.getAttribute("data-busca") || "")
        ).toLowerCase();

        if (texto.includes(termo)) {
          item.classList.remove("oculto");
          visiveis++;
        } else {
          item.classList.add("oculto");
        }
      });

      if (mensagemVazia) {
        mensagemVazia.classList.toggle("oculto", visiveis > 0);
      }
    });
  }
});
