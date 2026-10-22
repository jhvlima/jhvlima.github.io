# Portfólio de Jhvlima - Engenharia de Software & Desenvolvimento Web
## 🚀 Resumo Técnico do Projeto (Stack & Architecture)

Este portfólio foi migrado de uma estrutura estática (HTML/CSS/JS) para uma arquitetura moderna baseada em componentes, focada em performance, escalabilidade e manutenibilidade.

### 🛠️ Tecnologias Principais

1.  **Next.js 16 (App Router):**

      * Utilizado como framework principal React.
      * **Por que:** Oferece roteamento baseado em arquivos (`app/`), integração com `next/image` para dimensões e carregamento tardio e suporte nativo a TypeScript.
      * **Modo de Exportação:** Configurado em `next.config.mjs` com `output: 'export'` para gerar um site puramente estático (SSG - Static Site Generation), compatível com hospedagens sem servidor Node.js como o GitHub Pages. O mesmo arquivo mantém `images.unoptimized` para a exportação estática e ativa o React Compiler.

2.  **TypeScript:**

      * Adiciona tipagem estática ao JavaScript.
      * **Uso Prático:** Definimos interfaces como `Project` e `Semester` para garantir que os dados de projetos e educação sempre tenham os campos corretos, prevenindo erros de "undefined" em tempo de compilação.

3.  **Tailwind CSS (v4):**

      * Framework de estilização "utility-first".
      * **Vantagem:** Eliminou o arquivo CSS gigante legado. Estilos agora são aplicados diretamente nos componentes (ex: `bg-white shadow-sm rounded-lg`), garantindo consistência visual e facilitando o design responsivo (mobile-first).

4.  **GitHub Actions (CI/CD):**

      * Automação de deploy.
      * **Lógica:** Toda vez que há um `push` na branch `main`, o GitHub sobe um container Ubuntu com Node.js 22, instala as dependências, audita as dependências de produção, executa lint e typecheck, gera e valida a exportação estática e publica a pasta `out/` resultante no GitHub Pages. Uma auditoria completa, incluindo ferramentas de desenvolvimento, roda em um job separado e registra avisos sem bloquear o deploy.

### 🧠 Lógica de Programação & Padrões de Projeto

A refatoração focou em **Separation of Concerns** (Separação de Responsabilidades) e **DRY** (Don't Repeat Yourself).

#### 1\. Gerenciamento de Estado Global (Context API)

  * **Desafio:** Como manter o idioma selecionado (PT/EN/JA) persistente enquanto o usuário navega, sem usar bibliotecas pesadas de internacionalização e sem servidor?
  * **Solução:** Criamos o `LanguageContext`.
      * Ele envolve toda a aplicação no `layout.tsx`.
      * Renderiza português no HTML estático, sem bloquear o conteúdo durante a hidratação.
      * Usa `useSyncExternalStore` para sincronizar a preferência persistida no `localStorage`, inclusive entre abas.
      * Mantém o atributo `<html lang>` alinhado ao idioma ativo.
      * Exporta uma função `t(chave)` que qualquer componente pode usar para traduzir textos instantaneamente.

#### 2\. Data-Driven UI (Interface Orientada a Dados)

  * **Antes:** O HTML tinha repetição de código (ex: 3 blocos `<div>` iguais para os projetos).
  * **Agora:** Os dados foram extraídos para arquivos TypeScript puros (`src/data/projects.ts`, `src/data/education.ts`).
      * **Lógica:** O componente pai (`page.tsx`) importa esses arrays e usa `.map()` para renderizar os componentes filhos (`<ProjectCard />`) dinamicamente.
      * **Benefício:** Adicionar um novo projeto agora requer apenas adicionar um objeto no JSON, sem tocar no HTML/JSX.

#### 3\. Internacionalização (i18n) Manual

  * **Estratégia:** Em vez de usar bibliotecas complexas como `i18next`, criamos um dicionário simples de chaves-valores (`translations.ts`).
  * **Lógica de Acesso Seguro:** `TranslationKey` restringe `t()` e os arquivos de dados às chaves válidas do dicionário. Traduções ausentes são detectadas pelo TypeScript antes do deploy.

#### 4\. Componentização Atômica

  * Dividimos a UI em partes reutilizáveis:
      * `ProjectCard`: Aceita um objeto `Project` como "prop" e cuida de toda a renderização visual dele.
      * `EducationCard`: Usa `<details>` e `<summary>` nativos para manter o currículo acessível mesmo sem JavaScript.
      * `LanguageSwitcher`: Componente isolado apenas para os botões de troca de língua.

### 📂 Estrutura de Diretórios (Arquitetura)

```text
.
├── scripts/       # Validações do artefato exportado
└── src/
    ├── app/       # Rotas, layout e estilos globais (Next.js App Router)
    ├── components/  # Blocos visuais (Cards, Botões)
    ├── context/     # Lógica global (Estado do idioma)
    └── data/        # "Banco de dados" estático (objetos TypeScript tipados)
```

-----

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Node.js 22 or newer (`.nvmrc` pins the local major for nvm users). Install the dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

Antes de enviar alterações, execute a mesma validação usada no deploy:

```bash
npm run check
```

Esse comando bloqueia em vulnerabilidades altas ou críticas nas dependências de produção (`npm run audit:production`). Para consultar também as ferramentas de desenvolvimento, execute `npm run audit`.

A auditoria completa permanece informativa no CI enquanto a dependência de lint `braces` não possui uma versão corrigida para [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Essa política aceita temporariamente o risco nas ferramentas de desenvolvimento e deve ser revista quando houver correção. Falhas de instalação continuam visíveis como falhas do job de auditoria.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy.yml` valida o projeto e publica automaticamente a exportação estática no GitHub Pages após cada `push` na branch `main`. Também é possível iniciá-lo manualmente pela aba Actions.
