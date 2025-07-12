// Função para definir o idioma
const setLanguage = (language) => {
    // Encontra todos os elementos que precisam de tradução
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[language]?.[key];

        if (translation !== undefined) {
            element.innerHTML = translation;
        }
    });

    // Atualiza o atributo 'lang' da tag <html> para acessibilidade
    document.documentElement.lang = language;
    
    // Guarda a escolha do usuário no navegador para que ele não precise escolher de novo
    localStorage.setItem('language', language);
};

// Função para carregar o idioma salvo ou usar o padrão
const loadLanguage = () => {
    // Verifica se já existe um idioma salvo no navegador
    const savedLanguage = localStorage.getItem('language') || 'pt'; // Se não houver, usa 'pt' como padrão
    setLanguage(savedLanguage);
};

// Roda a função de carregar o idioma assim que a página estiver pronta
document.addEventListener('DOMContentLoaded', loadLanguage);