function iniciarCarrosselInfinito() {
    const grupos = document.querySelectorAll('.tl-grid');

    grupos.forEach(grupo => {
        const imagens = grupo.querySelectorAll('img');
        if (imagens.length === 0) return;

        // CLONA a primeira imagem e coloca no final do container
        const primeiraClone = imagens[0].cloneNode(true);
        grupo.appendChild(primeiraClone);

        let index = 0;
        const totalImagensComClone = grupo.querySelectorAll('img').length;
        const todasImagens = grupo.querySelectorAll('img');

        setInterval(() => {
            index++;
            
            // Aplica a transição normal para deslizar
            todasImagens.forEach(img => {
                img.style.transition = "transform 0.6s ease-in-out";
                img.style.transform = `translateX(-${index * 100}%)`;
            });

            // Se chegou no clone (última posição)
            if (index === totalImagensComClone - 1) {
                setTimeout(() => {
                    // Desativa a transição para voltar ao início sem ninguém ver
                    todasImagens.forEach(img => {
                        img.style.transition = "none";
                        img.style.transform = `translateX(0)`;
                    });
                    index = 0;
                }, 600); // 600ms é o mesmo tempo da transição CSS
            }
        }, 3000); // Tempo entre os slides
    });
}

window.addEventListener('load', iniciarCarrosselInfinito);
