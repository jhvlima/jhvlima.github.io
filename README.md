# Portfólio de Jhvlima - Engenharia de Software & Desenvolvimento Web
## 🚀 Resumo Técnico do Projeto (Stack & Architecture)

Este portfólio foi migrado de uma estrutura estática (HTML/CSS/JS) para uma arquitetura moderna baseada em componentes, focada em performance, escalabilidade e manutenibilidade.

### 🛠️ Tecnologias Principais

1.  **Next.js 15 (App Router):**

      * Utilizado como framework principal React.
      * **Por que:** Oferece roteamento baseado em arquivos (`app/`), otimização automática de imagens (embora desligada para GH Pages, a estrutura está pronta) e suporte nativo a TypeScript.
      * **Modo de Exportação:** Configurado com `output: 'export'` para gerar um site puramente estático (SSG - Static Site Generation), compatível com hospedagens sem servidor Node.js como o GitHub Pages.

2.  **TypeScript:**

      * Adiciona tipagem estática ao JavaScript.
      * **Uso Prático:** Definimos interfaces como `Project` e `Semester` para garantir que os dados de projetos e educação sempre tenham os campos corretos, prevenindo erros de "undefined" em tempo de compilação.

3.  **Tailwind CSS (v4):**

      * Framework de estilização "utility-first".
      * **Vantagem:** Eliminou o arquivo CSS gigante legado. Estilos agora são aplicados diretamente nos componentes (ex: `bg-white shadow-sm rounded-lg`), garantindo consistência visual e facilitando o design responsivo (mobile-first).

4.  **GitHub Actions (CI/CD):**

      * Automação de deploy.
      * **Lógica:** Toda vez que há um `push` na branch `main`, o GitHub sobe um container Ubuntu, instala as dependências, roda o build do Next.js e publica a pasta `out/` resultante no GitHub Pages.

### 🧠 Lógica de Programação & Padrões de Projeto

A refatoração focou em **Separation of Concerns** (Separação de Responsabilidades) e **DRY** (Don't Repeat Yourself).

#### 1\. Gerenciamento de Estado Global (Context API)

  * **Desafio:** Como manter o idioma selecionado (PT/EN/JA) persistente enquanto o usuário navega, sem usar bibliotecas pesadas de internacionalização e sem servidor?
  * **Solução:** Criamos o `LanguageContext`.
      * Ele envolve toda a aplicação no `layout.tsx`.
      * Usa o hook `useState` para guardar o idioma atual.
      * Usa `useEffect` para ler/salvar a preferência no `localStorage` do navegador.
      * Exporta uma função `t(chave)` que qualquer componente pode usar para traduzir textos instantaneamente.

#### 2\. Data-Driven UI (Interface Orientada a Dados)

  * **Antes:** O HTML tinha repetição de código (ex: 3 blocos `<div>` iguais para os projetos).
  * **Agora:** Os dados foram extraídos para arquivos TypeScript puros (`src/data/projects.ts`, `src/data/education.ts`).
      * **Lógica:** O componente pai (`page.tsx`) importa esses arrays e usa `.map()` para renderizar os componentes filhos (`<ProjectCard />`) dinamicamente.
      * **Benefício:** Adicionar um novo projeto agora requer apenas adicionar um objeto no JSON, sem tocar no HTML/JSX.

#### 3\. Internacionalização (i18n) Manual

  * **Estratégia:** Em vez de usar bibliotecas complexas como `i18next`, criamos um dicionário simples de chaves-valores (`translations.ts`).
  * **Lógica de Acesso Seguro:** Para evitar erros de TypeScript ao acessar chaves dinâmicas, usamos Type Assertion (`as any`) controlado dentro da função `t()`. Se uma tradução faltar, o sistema falha graciosamente mostrando a própria chave, em vez de quebrar a página.

#### 4\. Componentização Atômica

  * Dividimos a UI em partes reutilizáveis:
      * `ProjectCard`: Aceita um objeto `Project` como "prop" e cuida de toda a renderização visual dele.
      * `EducationCard`: Encapsula a lógica de abrir/fechar (Accordion) dos semestres usando a tag nativa `<details>` estilizada, sem precisar de JavaScript extra para animação básica.
      * `LanguageSwitcher`: Componente isolado apenas para os botões de troca de língua.

### 📂 Estrutura de Diretórios (Arquitetura)

```text
src/
├── app/           # Rotas e Layout (Next.js App Router)
├── components/    # Blocos visuais (Cards, Botões)
├── context/       # Lógica global (Estado do Idioma)
├── data/          # "Banco de dados" estático (JSONs tipados)
└── styles/        # Configurações globais do Tailwind
```

-----

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
