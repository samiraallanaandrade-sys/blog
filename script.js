// Dados dos artigos
const posts = [
  {
    id: 1,
    tag: "Motivos para Adotar",
    titulo: "5 Razões para Escolher a Adoção ao Invés de Comprar",
    resumo: "Ao adotar, você salva uma vida, combate o abandono e ganha um companheiro leal e grato para a vida toda.",
    imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600",
    curtidas: 24
  },
  {
    id: 2,
    tag: "Histórias de Sucesso",
    titulo: "De Resgatado a Xodó da Família: A História do Bob",
    resumo: "Conheça como o cãozinho Bob superou o medo das ruas e trouxe alegria sem fim para seu novo lar.",
    imagem: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600",
    curtidas: 42
  },
  {
    id: 3,
    tag: "Guia Prático",
    titulo: "Como Preparar a Casa para a Chegada de um Pet Adotado",
    resumo: "Dicas essenciais de adaptação, segurança e carinho para os primeiros dias do seu novo amigo em casa.",
    imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    curtidas: 18
  },
  {
    id: 4,
    tag: "Cuidados de Saúde",
    titulo: "A Importância da Castração e Vacinação em Dia",
    resumo: "Entenda como a castração previne doenças graves e prolonga a expectativa e qualidade de vida do seu pet.",
    imagem: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600",
    curtidas: 31
  }
];

// Função para renderizar os posts na tela
function carregarPosts() {
  const container = document.getElementById("postsContainer");
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="post-card">
      <img src="${post.imagem}" alt="${post.titulo}" loading="lazy">
      <div class="post-content">
        <span class="post-tag">${post.tag}</span>
        <h3 class="post-title">${post.titulo}</h3>
        <p class="post-excerpt">${post.resumo}</p>
        <div class="post-footer">
          <button class="like-btn" onclick="curtir(${post.id})" aria-label="Curtir publicação">
            ❤️ <span id="like-${post.id}">${post.curtidas}</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Função para curtir uma publicação
function curtir(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.curtidas++;
    const likeCountElement = document.getElementById(`like-${id}`);
    if (likeCountElement) {
      likeCountElement.innerText = post.curtidas;
    }
  }
}

// Lógica de alternância do tema escuro/claro com persistência (localStorage)
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeLabel = document.getElementById("themeLabel");
  
  // Verifica preferência do usuário salva ou do sistema operacional
  const savedTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeLabel) {
      themeLabel.innerText = theme === "dark" ? "Modo Claro" : "Modo Escuro";
    }
  }

  // Aplica o tema inicial
  applyTheme(savedTheme);

  // Evento de clique do botão 🌗
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }
}

// Inicializa o script quando a DOM estiver carregada
document.addEventListener("DOMContentLoaded", () => {
  carregarPosts();
  initTheme();
});
