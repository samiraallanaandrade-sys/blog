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
  }
];

function carregarPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = posts.map(post => `
    <article class="post-card">
      <img src="${post.imagem}" alt="${post.titulo}">
      <div class="post-content">
        <span class="post-tag">${post.tag}</span>
        <h3 class="post-title">${post.titulo}</h3>
        <p class="post-excerpt">${post.resumo}</p>
        <div class="post-footer">
          <button class="like-btn" onclick="curtir(${post.id})">
            ❤️ <span id="like-${post.id}">${post.curtidas}</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function curtir(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.curtidas++;
    document.getElementById(`like-${id}`).innerText = post.curtidas;
  }
}

document.addEventListener("DOMContentLoaded", carregarPosts);
