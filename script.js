document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('animated-photo');
    const detailText = document.getElementById('detail-text');

    // --- Animação Simples (1): Troca de Borda ao Clicar na Foto ---
    profilePhoto.addEventListener('click', () => {
        // Define uma cor de borda temporária
        profilePhoto.style.borderColor = '#ffc0cb'; // Rosa bebê

        // Adiciona um efeito de rotação
        profilePhoto.style.transform = 'rotate(10deg)';

        // Após um pequeno atraso, volta à cor e rotação original
        setTimeout(() => {
            profilePhoto.style.borderColor = 'var(--primary-pink)';
            profilePhoto.style.transform = 'rotate(0deg)';
        }, 300);
    });

    // --- Animação Simples (2): Efeito de Pulsação no Texto de Detalhe ---
    
    // Adiciona a classe 'pulsing' que contém a animação CSS
    detailText.classList.add('pulsing');

    // Adiciona um evento para pausar/reiniciar a animação ao passar o mouse
    detailText.addEventListener('mouseover', () => {
        detailText.style.animationPlayState = 'paused';
    });

    detailText.addEventListener('mouseout', () => {
        detailText.style.animationPlayState = 'running';
    });
});
