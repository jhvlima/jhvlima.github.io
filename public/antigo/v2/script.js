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

    // Toast de aviso de tradução
    const toast = document.getElementById('translation-toast');
    if (language === 'en' || language === 'ja') {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    } else {
        toast.classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // Referências aos elementos do DOM
    const ptBtn = document.getElementById('lang-pt-btn');
    const enBtn = document.getElementById('lang-en-btn');
    const jaBtn = document.getElementById('lang-ja-btn');

    // Adiciona os eventos de clique aos botões
    ptBtn.addEventListener('click', () => setLanguage('pt'));
    enBtn.addEventListener('click', () => setLanguage('en'));
    jaBtn.addEventListener('click', () => setLanguage('ja'));

    // Verifica se já existe um idioma salvo no navegador
    const savedLanguage = localStorage.getItem('language') || 'pt'; // Se não houver, usa 'pt' como padrão
    setLanguage(savedLanguage);
});