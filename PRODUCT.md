# Portfólio de João Henrique Valbusa Lima

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores e pessoas que querem conhecer a trajetória, os projetos e as competências de João Henrique. A prioridade atual é a candidatura à trilha AI Engineer do programa GenAI do iFood.

## Product Purpose

Apresentar experiências e projetos com evidências que ajudem o visitante a entender o trabalho do autor e a explorar os assuntos de seu interesse. O portfólio também contempla desenvolvimento web, automação, skills e prompts.

## Operating Context

Site público publicado no GitHub Pages em `https://jhvlima.github.io/`, com página inicial e Hub de Projetos em `/hub/`. A implementação usa Next.js, React, TypeScript e exportação estática. O conteúdo está disponível em português, inglês e japonês.

## Capabilities and Constraints

- O autor renomeou a vitrine para Hub. Menu, título, chamadas e metadados usam o novo nome nos três idiomas. A URL principal é `/hub/`; o endereço anterior `/vitrine/` encaminha para ela. O Hub também apresenta os contatos GitHub, LinkedIn e Currículo Lattes; nele, o item Contato da navegação aponta para a própria seção local.
- A vitrine permite priorizar projetos por foco. Os relacionados sobem e todos os projetos continuam visíveis; a visão geral restaura a ordem original.
- Um projeto pode pertencer a vários focos. Categorias e tecnologias têm papéis distintos.
- A abordagem técnica é independente do foco e da visibilidade: treino de modelos, integração de modelos por API, monitoramento de agentes ou simulação e otimização. No cartão, essa etiqueta substitui a etiqueta genérica de IA; o filtro de área continua abrangendo os projetos relacionados.
- Machine Learning identifica treino e avaliação de modelos (botChess e previsão de aluguel). IA aplicada identifica soluções que integram modelos existentes por API, incluindo os projetos de clientes da CT Junior e a documentação automática. KamiAgents identifica monitoramento; o tênis de mesa identifica simulação e otimização numérica. Apoio de IA durante a programação é uma informação de autoria distinta dessas abordagens, sem implicar treino de modelo.
- Foco e visibilidade do código são seleções independentes e combináveis por interseção. Os projetos que atendem a ambas sobem e os demais continuam visíveis em tons de cinza, com texto legível; as cores voltam ao passar o mouse ou focar um elemento do cartão.
- A classificação de visibilidade é explícita: público, privado ou ainda não confirmado. A ausência de link não comprova que o código é privado.
- Projetos de código privado podem apresentar capturas locais com legendas opcionais e descrição, sem publicar link do repositório.
- A introdução da vitrine contém apenas título e subtítulo, com menção a projetos privados no subtítulo; orientações e contagens de resultado ficam fora da apresentação visual.
- Links de repositórios, publicações e demonstrações devem continuar acessíveis.
- O padrão Caderno aberto cobre todas as páginas ativas: apresentação, projetos principais, formação expansível, competências, contatos, vitrine, navegação compartilhada e página de endereço não encontrado. As versões em `/antigo/` permanecem como arquivos históricos.
- Conservar a navegação por teclado, as traduções e a adaptação a telas pequenas.
- Alterações de conteúdo e métricas precisam de evidência; um experimento histórico não comprova o desempenho de uma demonstração atual.
- Projetos acadêmicos em andamento recebem o estado explícito de desenvolvimento. A simulação de tênis de mesa é descrita como modelagem e otimização numérica, sem alegação de modelo de aprendizado treinado ou de resultados finais.
- Publicação e alterações no currículo são etapas separadas da exploração visual.

## Brand Commitments

- Preferência confirmada pelo autor: tranquilidade e uma apresentação mais clean.
- O novo estilo deve transmitir personalidade com clareza, sem excesso de elementos visuais.
- Acrescentar um pouco mais de cor, com destaques leves para diferenciar tópicos distintos.
- Ao selecionar filtros, dar destaque aos projetos relacionados e reduzir a cor dos demais. Evitar desfocar o texto.
- O autor escolheu comparar prévias reais em HTML/CSS antes de levar uma direção ao restante do site.
- Após comparar as prévias, o autor escolheu Caderno aberto: Karla, fundo azul claro, índice lateral e registros abertos com títulos ao lado das descrições. Depois da vitrine, pediu explicitamente a extensão do padrão às demais páginas do portfólio.
- O avatar em `public/images/profile.png` é um elemento de identidade existente. Sua substituição não foi solicitada.

## Evidence on Hand

- `src/data/miniProjects.ts`: projetos e categorias atuais da vitrine.
- `src/data/projects.ts`: experiências e destaques da página inicial.
- `src/data/education.ts`: trajetória acadêmica.
- `src/data/translations.ts`: conteúdo nos três idiomas.
- `public/images/profile.png`: avatar existente.
- `public/images/projects/`: imagens já presentes no projeto.
- Os projetos existentes incluem botChess, n8n-workflows, bot de vendas para Telegram, jogos de terminal, trabalhos da UFES, dogmasLogica e quatro casos de código privado da CT Junior: atendimento e reservas, tarefas, automação financeira e documentos técnicos. Os nomes dos clientes não são publicados.
- A categoria Skills e Prompts ainda não tem cartões cadastrados.
- KamiAgents é um caso interno de código privado para acompanhamento de mensagens e conexões de agentes. O autor confirmou desenvolvimento completo da interface, integração com banco, manutenção e documentação; isso não atribui a ele autoria exclusiva de todo o backend.
- A apresentação destaca projetos de machine learning, aplicações web, agentes de IA, pesquisa em PLN e jogos. As competências separam dados e machine learning, bancos e integrações e ferramentas de IA para desenvolvimento; Antigravity, Claude e Codex foram informados pelo autor.
- O projeto acadêmico de previsão de aluguel da Grande Vitória foi desenvolvido em grupo. A contribuição do autor inclui dados, pipeline de modelagem, avaliação e inferência; o repositório contém modelo e relatórios de teste.
- O trabalho de tênis de mesa de MCD foi confirmado pelo autor e permanece em desenvolvimento, sem resultados finais apresentados na vitrine.
- O fluxo público de documentação automática já possuía um cartão e foi atualizado, sem duplicação. Descreve formulário, documentação assistida por IA e snapshots técnicos diários com sanitização e remoção de referências de credenciais; não representa backup completo da VM ou das credenciais.
- A visibilidade de KamiAgents, previsão de aluguel e MCD foi conferida no GitHub como privada. Seus cartões não incluem links de código; a publicação de repositórios não faz parte desta rodada.
- Os quatro casos privados foram descritos a partir do relato do autor e de artefatos locais. O caso de atendimento e reservas reúne agente e dashboard desenvolvidos individualmente com apoio de IA; os demais são apresentados como participação na construção. As capturas ainda serão selecionadas.
- A apresentação desses casos descreve escopo, implementação e contribuição pessoal. Não atribuir adoção, ganhos operacionais, métricas ou prontidão de produção sem evidência. O caso de documentos técnicos trata da geração de documentos, sem afirmar sucesso do preenchimento da QQP.

## Product Principles

- Tornar os projetos fáceis de explorar sem ocultar a amplitude do trabalho.
- Destacar contribuições, demonstrações e resultados verificáveis.
- Expressar o autor com tranquilidade e clareza.
- Evoluir em etapas que possam ser comparadas e revisadas.
