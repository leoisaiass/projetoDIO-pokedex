const toggleButton = document.getElementById('toggleDarkMode');

// Função para atualizar o texto do botão dependendo do tema atual
function updateButtonText() {
    const darkModeOn = document.body.classList.contains('dark-theme');
    toggleButton.textContent = darkModeOn ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}

// Verifica o estado atual e atualiza o texto do botão
updateButtonText();

// Adiciona o evento de clique para alternar o tema
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');  // Alterna o tema
    updateButtonText();  // Atualiza o texto do botão
});
