// Seleciona todos os links dentro da div com a classe 'nav'
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de "pular" para a seção

    // Pega o valor do atributo href (ex: #servicos)
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Se o elemento de destino existir, rola suavemente até ele
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Alinha o topo da seção ao topo da página
      });
    }
  });
});

