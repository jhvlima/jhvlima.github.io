---
name: "Portfólio — Caderno aberto"
description: "Papel frio, tinta azul e registros abertos para explorar projetos com tranquilidade."
colors:
  paper: "#f5f8fb"
  ink: "#172f44"
  blue: "#476d89"
  rule: "#dde7ee"
  ai-ink: "#694587"
  ai-wash: "#f0eaf6"
  web-ink: "#315f8b"
  web-wash: "#e7eff8"
  automation-ink: "#82571d"
  automation-wash: "#f7eedc"
  skills-ink: "#3c6b53"
  skills-wash: "#e9f2ec"
  neutral-wash: "#eaf0f5"
  selection: "#d4e1ec"
  secondary-paper: "#eef1f4"
  secondary-ink: "#243444"
typography:
  display:
    fontFamily: "Karla, sans-serif"
    fontSize: "clamp(36px, 3.5vw, 49px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  featured-title:
    fontFamily: "Karla, sans-serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Karla, sans-serif"
    fontSize: "26px"
    fontWeight: 550
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  author:
    fontFamily: "Karla, sans-serif"
    fontSize: "21px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Karla, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  filter:
    fontFamily: "Karla, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.35
  topic:
    fontFamily: "Karla, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
  status:
    fontFamily: "Karla, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  section-title:
    fontFamily: "Karla, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  highlight-title:
    fontFamily: "Karla, sans-serif"
    fontSize: "25px"
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  education-title:
    fontFamily: "Karla, sans-serif"
    fontSize: "22px"
    fontWeight: 550
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  skill-title:
    fontFamily: "Karla, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.35
  auxiliary:
    fontFamily: "Karla, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  label: "4px"
  filter: "5px"
spacing:
  tight: "8px"
  small: "12px"
  medium: "16px"
  inset: "20px"
  section: "24px"
  wide: "32px"
  column: "48px"
  gutter: "clamp(20px, 4vw, 58px)"
components:
  filter-topic:
    backgroundColor: "{colors.web-wash}"
    textColor: "{colors.web-ink}"
    typography: "{typography.filter}"
    rounded: "{rounded.filter}"
    padding: "10px"
  filter-neutral:
    typography: "{typography.filter}"
    textColor: "{colors.ink}"
    rounded: "{rounded.filter}"
    padding: "10px"
  reset:
    textColor: "{colors.blue}"
    height: "44px"
  language:
    textColor: "{colors.blue}"
    height: "36px"
    width: "32px"
  nav-link:
    textColor: "{colors.ink}"
    padding: "10px 0"
  topic:
    backgroundColor: "{colors.web-wash}"
    textColor: "{colors.web-ink}"
    typography: "{typography.topic}"
    rounded: "{rounded.label}"
    padding: "3px 7px"
  status:
    textColor: "{colors.blue}"
    typography: "{typography.status}"
    rounded: "{rounded.label}"
    padding: "2px 7px"
  record:
    textColor: "{colors.ink}"
    padding: "22px 16px"
  action-outline:
    textColor: "{colors.blue}"
    rounded: "{rounded.filter}"
    padding: "10px 16px"
    height: "44px"
  disclosure:
    textColor: "{colors.ink}"
    height: "44px"
---

# Design System: Portfólio — Caderno aberto

## Overview

**Creative North Star: "Caderno aberto"**

Papel frio, tinta azul e linhas finas dão aos projetos a aparência de registros pessoais abertos. A tipografia tem presença sem rigidez; a cor orienta por assunto e preserva uma leitura tranquila. Esta é a direção escolhida pelo autor após comparar prévias em HTML/CSS.

A implementação registrada cobre a página inicial `/`, o Hub de Projetos em `/hub/`, a navegação compartilhada e a página 404. O sistema vem de `src/app/notebook.css`, das extensões da página inicial em `src/app/home.css`, da cronologia em `src/components/EducationCard.module.css` e dos estados compartilhados em `src/app/globals.css`. As versões em `/antigo/` são arquivos históricos e não foram redesenhadas.

**Key Characteristics:**

- Papel azul claro, tinta escura e separadores delicados.
- Karla variável para identidade, títulos, descrição e controles.
- Registros abertos com hierarquia tipográfica, sem caixas individuais ao redor dos projetos.
- Tintas suaves por assunto; prioridade visível sem remover registros.
- Controles e conteúdo adaptados a português, inglês e japonês.

## Colors

A paleta combina papel frio e tinta azul com quatro pares de tinta e fundo suave; os valores normativos estão no frontmatter. As rampas OKLCH do sidecar são amostras sintetizadas para o painel, não cores adicionais usadas pela interface.

### Primary

- **Azul de anotação** (`blue`): subtítulo, links de código, ocupação, tecnologias e controles secundários. Também desenha o foco de teclado.

### Secondary

- **Violeta de IA** (`ai-ink` / `ai-wash`): foco de IA e etiquetas de treino de modelos ou integração por API.
- **Azul de web** (`web-ink` / `web-wash`): desenvolvimento web.
- **Âmbar de automação** (`automation-ink` / `automation-wash`): automação.
- **Verde de skills** (`skills-ink` / `skills-wash`): skills e prompts; o filtro existe mesmo quando não há registros dessa área.

### Neutral

- **Papel frio** (`paper`): fundo contínuo da página e navegação.
- **Tinta azul escura** (`ink`): texto principal e linha de abertura da coleção.
- **Linha de pauta** (`rule`): divisórias, contornos de estados e bordas de capturas quando presentes.
- **Lavagem azul neutra** (`neutral-wash`): prioridade quando somente a visibilidade está selecionada; também acompanha etiquetas de monitoramento e simulação/otimização.
- **Seleção de leitura** (`selection`): seleção nativa de texto sobre a tinta principal.
- **Papel e tinta secundários** (`secondary-paper`, `secondary-ink`): registros fora da seleção, com escala de cinza aplicada ao conjunto.

### Named Rules

**The Tinta e lavagem Rule.** Cada assunto usa sua tinta sobre a lavagem correspondente; o fundo suave ocupa controles, etiquetas e registros priorizados, mantendo o texto escuro.

**The Coleção legível Rule.** Despriorizar mantém o texto legível e todos os projetos acessíveis. Hover e foco dentro do registro restauram suas cores; não aplicar desfoque ou transparência ao texto.

## Typography

**Display Font:** Karla variável, com fallback sans-serif.
**Body Font:** Karla variável, com fallback sans-serif.

A mesma família conecta o tom pessoal dos títulos à leitura prática das descrições. O arquivo é servido pelo Next.js via `next/font`, exposto globalmente em `--font-karla`, com o preload padrão; o subconjunto configurado é latino. Caracteres japoneses usam o fallback disponível no sistema, sem uma segunda família japonesa fixada pelo projeto.

### Hierarchy

- **Display:** apresentação da página inicial, título do Hub e página 404; peso, tamanho fluido e entrelinha no token `display`. Em telas de até 599px, permanece em 36px.
- **Featured title:** primeiro registro da ordem corrente no Hub; token `featured-title`, reduzido a 32px em até 599px.
- **Title:** demais títulos de projeto no Hub; token `title`, com quebra de palavras para nomes extensos.
- **Section title:** seções da página inicial e contatos do Hub no token `section-title`; 28px em até 599px.
- **Highlight title:** títulos dos projetos principais na página inicial no token `highlight-title`; 24px em até 599px.
- **Education title:** nomes dos cursos na cronologia no token `education-title`; 20px em até 599px.
- **Skill title:** categorias de competências no token `skill-title`.
- **Auxiliary:** orientações e disciplinas dos períodos no token `auxiliary`; entrelinha 1.5. Os auxiliares de filtros e código do Hub mantêm seus próprios estilos já descritos.
- **Author:** identidade no cabeçalho; token `author`, reduzido a 16px em até 599px.
- **Body:** descrições no token `body`, até 74ch; reduzidas a 16px em até 599px. O subtítulo usa 18px e até 72ch, reduzido a 16px na mesma faixa.
- **Filter:** controles de prioridade no token `filter`; 15px em até 899px. Selecionados usam peso 650.
- **Topic / Status:** etiquetas compactas nos tokens correspondentes. Tópicos reduzem a 13px em até 599px. Tecnologias e links de código usam 15px; tecnologias reduzem a 14px nessa faixa.

**The Uma voz Rule.** Usar a mesma família nos controles e no conteúdo; distinguir níveis por tamanho, peso e espaço, preservando os rótulos nos três idiomas.

## Layout

O conteúdo e o cabeçalho compartilham largura máxima de 1324px e margens laterais fluidas pelo token `gutter`. O cabeçalho tem altura mínima de 102px. As páginas inicial e Hub começam 28px abaixo dele.

Na expressão atual do Hub, o índice lateral mede 228px e se separa dos registros por 48px. Sua posição é sticky com distância superior de 24px; uma linha vertical fina marca a margem. Cada registro distribui nome e ações numa coluna entre 180px e 240px, com descrição e etiquetas ao lado e intervalo de 24px. O primeiro registro da ordem corrente recebe título maior e espaçamento vertical de 24px. Os demais usam o token de preenchimento `record`.

- **Até 1199px:** a navegação passa ao menu expansível; índice de 204px, intervalo de 32px e coluna de títulos entre 160px e 200px, com intervalo interno de 20px.
- **Até 899px:** uma única coluna organiza introdução, filtros, registros e rodapé. O índice deixa de ser sticky e os controles passam a quebrar em linhas. A descrição ainda pode permanecer ao lado do título.
- **Até 599px:** cabeçalho mínimo de 90px, avatar de 38px e início da página a 24px. Cada registro passa a uma coluna, com intervalo de 14px e preenchimento de 24px por 10px.

Na página inicial, a mesma grade acomoda o índice de âncoras e a coluna de apresentação, projetos, formação, competências e contatos. As seções se separam por 64px, reduzidos a 44px em até 599px. As categorias de competências acompanham a divisão dos registros e passam a uma coluna nessa faixa. A cronologia usa uma linha vertical fina e ramos recuados; disciplinas ficam em duas colunas e passam a uma em até 599px. A 404 usa o mesmo papel, cabeçalho, título e ações, com início a 64px.

Os intervalos recorrentes estão no frontmatter; os valores específicos desta composição descrevem o Hub e não obrigam futuras superfícies a repetir seu índice lateral.

## Elevation & Depth

As páginas ativas não usam sombras. Profundidade vem da continuidade do papel, dos separadores de 1px e das lavagens que indicam prioridade. O menu móvel sobrepõe o conteúdo com fundo de papel e contorno fino, sem sombra. O foco acessível usa outline de 2px na tinta azul, afastado 4px do elemento.

**The Papel contínuo Rule.** Distinguir registros por linhas e hierarquia, preservando o fundo contínuo; não introduzir elevação nos registros do site ativo.

## Shapes

Os registros permanecem abertos e retos. Cantos suavizados aparecem em pequenas etiquetas e capturas (`rounded.label`) e nos filtros (`rounded.filter`), sem transformar a composição em uma grade de cartões. Estados de desenvolvimento usam contorno tracejado. Ícones funcionais são SVG de traço, incluindo seta de link, chevron e marca de seleção.

O avatar existente em `public/images/profile.png` é reutilizado sem modificação, com renderização pixelada: 56px no cabeçalho amplo e 38px na faixa menor. As quatro imagens dos destaques da página inicial também reutilizam arquivos existentes em `public/images/projects/`, preservando a proporção e o conteúdo. Nenhum novo raster foi criado nesta rodada; este documento não estabelece autoria ou licença desses arquivos.

## Components

### Buttons

Filtros de assunto usam tinta e lavagem do tópico, altura mínima de 44px e contorno inicialmente transparente. A seleção combina peso 650, contorno da tinta, marca SVG e `aria-pressed`; hover também revela o contorno. Filtros neutros preservam o papel de fundo: na lateral ampla, a seleção é marcada pelo peso e pela marca; em até 899px, há também contorno azul. As medidas do frontmatter são os padrões amplos; filtros compactos usam preenchimento de 8px por 10px.

A ação de limpar é um botão textual sublinhado, azul, com altura mínima de 44px. Ela aparece quando há seleção e restaura os dois grupos e a ordem original. A transição dos filtros afeta fundo e borda em 180ms com `ease-out`; registros usam a mesma duração para filtro de cor, fundo e borda. `prefers-reduced-motion: reduce` remove essas transições.

A seção de contatos é compartilhada pela página inicial e pelo final da coleção do Hub. No Hub, fica a 48px dos registros, reduzidos a 44px em até 599px. Ações de contato e retorno da 404 usam contorno azul de 1px, cantos do token `rounded.filter`, altura mínima de 44px e preenchimento de 10px por 16px. Hover aplica tinta e lavagem de web. Links de aprofundamento são sublinhados, com seta SVG e alvo mínimo de 44px.

### Chips

Etiquetas de assunto usam o par tinta/lavagem correspondente, sem contorno. A abordagem técnica substitui a etiqueta genérica de IA quando informada; não deve ser confundida com tecnologia nem com auxílio de IA na autoria. Estados de código privado e desenvolvimento são etiquetas de contorno neutro; desenvolvimento acrescenta o tracejado. Não são controles clicáveis.

### Cards / Containers

O componente de projeto é um registro aberto, semanticamente um `article` nomeado pelo título. Linha superior escura abre a coleção; linhas finas separam os registros. Nome, código público ou estado ficam ao lado da descrição em telas amplas. Tecnologias são uma lista textual separada por pontos medianos. Capturas, quando cadastradas, têm contorno fino, cantos suaves, legenda opcional e link para a imagem.

Foco e visibilidade se combinam por interseção. Os correspondentes sobem, preservando a ordem relativa, e recebem lavagem de assunto ou neutra. Todos os demais continuam presentes em cinza; hover ou foco dentro restaura cor e papel. O primeiro registro da ordem corrente usa a variante maior. Os resultados são anunciados em região de status para leitores de tela, sem inserir contagens na introdução.

Os destaques da página inicial mantêm o registro aberto, com título `h3`, imagem existente, descrição, etiquetas e link de aprofundamento. Competências usam uma lista de definições: categoria de um lado e etiquetas neutras do outro, sem caixas individuais.

### Formação expansível

A cronologia é uma lista ordenada com linha fina e marcos circulares: preenchido para a graduação em andamento, vazio para a formação anterior e tracejado para continuidade. Cursos, histórico, experiências e períodos usam `details` / `summary` nativos, com alvo mínimo de 44px, foco visível e chevron SVG que gira ao abrir. Os dez períodos mantêm estados textuais de concluído, em andamento e planejado, acompanhados por lavagens de skills, web e neutra. O período corrente inicia aberto e tem `aria-current="step"`; a abertura dos ramos preserva a hierarquia da lista.

A expansão animada usa 300ms na graduação e 220ms nos períodos, com curva `cubic-bezier(.22,1,.36,1)`; a opacidade usa 180ms `ease-out`. A navegação e a expansão seguem o comportamento nativo sem JavaScript. Movimento reduzido remove as transições; em cores forçadas, linha e marcos usam as cores do sistema.

### Navigation

A identidade reúne avatar, nome e ocupação. A navegação é compartilhada pelas páginas ativas; links usam tinta principal e a página corrente recebe `aria-current="page"`, linha inferior e peso 650 conforme o pathname. Âncoras de seção não recebem o estado de página; a 404 não marca nenhum link como corrente. Contato aponta para `/hub/#contact` no Hub, preservando os filtros da página, e para `/#contact` na página inicial. Hover sublinha. Abaixo do limiar amplo, `details` e `summary` oferecem menu nativo com alvo mínimo de 44px. O painel ocupa a largura do cabeçalho e apresenta links empilhados; ao seguir um link, fecha e devolve o foco ao summary.

Um link de salto aparece ao receber foco e leva ao conteúdo principal, que pode receber foco programático. O seletor de idioma compartilhado usa PT, EN e JA como botões de tamanho mínimo 32px por 36px. O ativo combina tinta principal, peso 650, sublinhado e `aria-pressed`. Cada botão possui nome acessível no idioma correspondente.

Em `forced-colors: active`, os filtros e o idioma selecionados recebem outline do sistema; os registros priorizados ganham linha inferior reforçada e os secundários deixam a escala de cinza e usam linha tracejada. Não depender só de lavagens para comunicar estado.

## Do's and Don'ts

### Do:

- **Do** manter os pares de tinta e lavagem por assunto e os estados explícitos de seleção.
- **Do** manter os registros legíveis, presentes e navegáveis ao priorizar projetos.
- **Do** preservar foco visível, movimento reduzido, cores forçadas e tradução em PT, EN e JA.
- **Do** reutilizar o avatar existente sem atribuir autoria ou licença não verificadas.
- **Do** conferir o resultado em texto longo e telas estreitas antes de estender o sistema.

### Don't:

- **Don't** aplicar a documentação das páginas ativas aos arquivos históricos em `/antigo/`.
- **Don't** substituir os registros do site ativo por caixas elevadas ou texturas ornamentais de papel.
- **Don't** desfocar ou diminuir a opacidade do texto dos registros despriorizados.
- **Don't** usar uma etiqueta de IA para equiparar treino de modelo, integração por API, monitoramento e simulação.
- **Don't** ocultar projetos ao selecionar foco ou visibilidade.
