// src/data/translations.ts
export type Language = 'pt' | 'en' | 'ja';

export const translations = {
    
    // =====================================================================
    // 🇺🇸 ENGLISH TRANSLATIONS
    // =====================================================================
    en: {
        // --- Profile & Header ---
        page_title: "João Henrique Valbusa Lima - Portfolio",
        profile_name: "João Henrique Valbusa Lima",
        warning_title: "Translation Notice",
        warning_text: "This is an automated translation and has not yet been professionally reviewed neither complete.",
        profile_title: "Computer Science Student at <strong>Federal University of Espírito Santo (UFES)</strong>",
        profile_bio: "Fascinated by Natural Language Processing and game development. Currently involved in academic research projects, the junior enterprise, and the university's GameLab.",

        // --- Projects Section ---
        projects_title: "Main Projects",
        nav_vitrine: "Showcase",
        
        // Project 1
        project1_title: "Scientific Initiation: API for Chemical Entity Recognition",
        project1_desc: "During two years of Scientific Initiation, I contributed to research in Natural Language Processing focused on chemistry. In the first year, I studied methodologies and tools like Unitex to build rules for Named Entity Recognition (NER), culminating in a published scientific article. In the second year, I focused on developing specific rules to identify organic and inorganic compounds, applying my technical background in chemistry to the research group's needs.",
        tag_nlp: "Natural Language Processing",
        details1_summary: "View full article abstract",
        details_abstract_title: "Abstract:",
        details1_abstract_content: "Named Entity Recognition (NER) is fundamental for activities involving text processing and information extraction. This work has two objectives: to improve the existing Local Grammars (LGs) for chemical Named Entity Recognition (NER), making them more comprehensive; and to build an Application Programming Interface (API) capable of receiving an input file, running the scripts that apply both the LGs and the hybrid Conditional Random Fields (CRF) and LG method, and returning a file with the processed text and annotated named entities. The methodology includes a linguistic study of the chemical domain, a study of existing LGs for chemical entities, and modifications to the LGs. The API was developed using Shell Script and Makefile and has undergone functional testing. The next steps of the project involve expanding and refining the rules in the LGs to achieve greater precision and coverage in recognizing chemical entities, as well as making the API available through a web interface.",
        details_keywords_title: "Keywords:",
        details1_keywords: "Local Grammars, Named Entity Recognition, Natural Language Processing, Chemical Entities.",
        project1_link_title: "Publication Link",

        // Project 2
        project2_title: "CT Junior",
        status_ongoing: "Ongoing",
        project2_desc: "At CT Junior, I worked on end-to-end solutions, creating modern interfaces with React.js. I automated complex processes using n8n and developed advanced conversational and financial agents using RAG (Retrieval-Augmented Generation). For data persistence, I used databases like Supabase and PostgreSQL, delivering real value through modern technologies.",
        tag_softeng: "Software Engineering",
        project2_link_title: "Visit CT Junior",

        // Project 3
        project3_title: "UFES GameLab",
        project3_desc: "At the UFES GameLab, I joined a multidisciplinary team (statistics, design, and computer science) to develop an original, educational game on Roblox focused on environmental education. I was one of the lead programmers, developing the core logic, physics systems, events, scoring, and collisions using Luau. Additionally, I gained basic knowledge in 3D asset modeling using Blender.",
        tag_gamedev: "Game Development",
        project3_link_title: "Play on Roblox",

        // Project 4
        project4_title: "Personal Projects",
        project4_desc: "I enjoy using programming to explore ideas and learn new technologies. Here are some of my smaller projects and academic experiments.",
        project4_link_title: "See my project showcase here",

        // --- Mini Projects ---
        mini_projects_title: "Project Showcase",
        mini_projects_subtitle: "Smaller projects, experiments, and academic work.",
        mini_chess_desc: "The chess bot was trained with about 1500 of my personal games played on chess.com. So try to beat me by clicking here.",
        mini_telegram_bot_desc: "The Telegram bot is an interface I developed to facilitate the cash flow generation of a selection process stage at CT Junior. A message to the bot automatically registers sales in a Google Sheets spreadsheet.",
        mini_terminal_games_desc: "Classic games implementation running purely on the terminal.",
        mini_ufes_desc: "Collection of academic projects developed during my Computer Science course.",
        mini_logic_desc: "dogmasLogica is a personal project I created to study Catholic dogmas and develop my Prolog skills.",
        mini_go_project_desc: "A new project currently being developed using the Go (Golang) programming language.",

        // --- Education Section ---
        education_title: "Education",
        education_course: "Computer Science",
        education_university: "Federal University of Espírito Santo (UFES)",
        education_highlights_title: "Featured Courses:",
        education_highlights_list: "Artificial Intelligence, Compilers, Graph Theory, Object-Oriented Programming.",
        education_details_summary: "View full curriculum",
        education_semester: "Semester",

        // Status Labels
        sem_completed: "Completed",
        sem_ongoing: "Ongoing",
        sem_pending: "Pending",

        // Semesters (Extracting from the old HTML list)
        sem1_subjects: "Programming I, Calculus I, Theoretical Aspects of Computing, Introduction to Computer Science",
        sem2_subjects: "Programming II, Calculus II, Linear Algebra, Digital Logic Elements, Logic for Computing I",
        sem3_subjects: "Data Structures, Probability and Statistics, Computer Architecture and Organization, Calculus IV",
        sem4_subjects: "Sorting and Searching Techniques, Operating Systems, Object-Oriented Programming, Formal Languages and Automata, Graph Theory",
        sem5_subjects: "Numerical Algorithms, Software Engineering I, Computer Networks, Logic for Computing II, Integrated Project I",
        sem6_subjects: "Computing and Society, Software Engineering II, Programming Paradigms, Theory of Computation",
        sem7_subjects: "Database I, Compilers, Artificial Intelligence, Algorithm Design and Analysis",
        sem8_subjects: "Scientific Research Methodology",
        sem9_subjects: "Final Project I",
        sem10_subjects: "Final Project II",

        // --- Skills Section ---
        skills_title: "Development Environment",
        skills_languages_title: "Languages:",
        skills_frameworks_title: "Frameworks & Libraries:",
        skills_tools_title: "Tools & Editors:",

        // --- Footer & Links ---
        contact_title: "Contact",
        btn_view_more: "View details",
        link_old_version: "Access old version"
    },

    // =====================================================================
    // 🇯🇵 JAPANESE TRANSLATIONS
    // =====================================================================
    ja: {
        // --- Profile & Header ---
        page_title: "ジョアン・エンリケ・ヴァルブサ・リマ - ポートフォリオ",
        profile_name: "ジョアン・エンリケ・ヴァルブサ・リマ",
        warning_title: "翻訳に関するお知らせ",
        warning_text: "これは自動翻訳であり、まだ専門家によるレビューを受けておらず、不完全な場合があります。",
        profile_title: "<strong>エスピリトサント連邦大学 (UFES)</strong> のコンピュータサイエンス学生",
        profile_bio: "自然言語処理とゲーム開発の分野に魅了されています。現在、学術研究プロジェクト、ジュニアエンタープライズ、大学のゲームラボに参加しています。",

        // --- Projects Section ---
        projects_title: "主なプロジェクト",
        nav_vitrine: "ショーケース",

        // Project 1
        project1_title: "科学的開始：化学物質エンティティ認識のためのAPI",
        project1_desc: "2年間の科学研究（Iniciação Científica）において、化学分野に焦点を当てた自然言語処理の研究に貢献しました。1年目は、名前付きエンティティ認識（NER）のためのルールを構築するためにUnitexなどの方法論やツールを学び、科学論文の発表に至りました。2年目は、化学の専門知識を活かし、有機・無機化合物を特定するための具体的なルールの開発に注力しました。",
        tag_nlp: "自然言語処理",
        details1_summary: "論文の要旨全体を見る",
        details_abstract_title: "要旨:",
        details1_abstract_content: "名前付きエンティティ認識（NER）は、テキスト処理と情報抽出を含む活動の基本です。この研究には2つの目的があります。既存の化学分野の名前付きエンティティ認識（NER）のための局所文法（LG）を改善し、より包括的にすること、そして、入力ファイルを受け取り、LGとハイブリッドな条件付き確率場（CRF）およびLGの両方を適用するスクリプトを実行し、処理されたテキストと注釈付きの名前付きエンティティを含むファイルを返すことができるアプリケーションプログラミングインターフェース（API）を構築することです。方法論には、化学ドメインの言語学的研究、化学エンティティに関する既存のLGの研究、およびLGの変更が含まれます。APIはシェルスクリプトとMakefileを使用して開発され、機能テストが行われました。プロジェクトの次のステップでは、化学エンティティの認識における精度と網羅性を高めるためにLG内のルールを拡張および改良し、APIをWebインターフェース経由で利用可能にすることを目指します。",
        details_keywords_title: "キーワード:",
        details1_keywords: "局所文法, 名前付きエンティティ認識, 自然言語処理, 化学エンティティ.",
        project1_link_title: "出版物リンク",

        // Project 2
        project2_title: "CTジュニア",
        status_ongoing: "進行中",
        project2_desc: "CT Juniorでは、React.jsを使用して最新のインターフェースを作成するなど、エンドツーエンドのソリューション開発に携わりました。n8nを用いた複雑なプロセスの自動化や、RAG（Retrieval-Augmented Generation）を活用した高度な対話型および金融エージェントの開発を行いました。データの保存にはSupabaseやPostgreSQLを使用し、最新技術を通じて価値を提供しました。",
        tag_softeng: "ソフトウェア工学",
        project2_link_title: "CT Juniorを訪問",

        // Project 3
        project3_title: "UFESゲームラボ",
        project3_desc: "UFES GameLabでは、多分野のチーム（統計学、デザイン、計算機科学）に参加し、環境教育に焦点を当てたRoblox上のオリジナル教育ゲームを開発しました。主なプログラマーの一人として、Luauを使用してコアロジック、物理システム、イベント、スコアリング、衝突判定などを開発しました。また、Blenderを使用した3Dアセットモデリングの基礎も習得しました。",
        tag_gamedev: "ゲーム開発",
        project3_link_title: "Robloxでプレイ",

        // Project 4
        project4_title: "個人プロジェクト",
        project4_desc: "プログラミングを使ってアイデアを探求し、新しい技術を学ぶことが好きです。ここでは、私の小さなプロジェクトや学術的な実験のいくつかを紹介します。",
        project4_link_title: "ここで私のプロジェクトショーケースを見る",

        // --- Mini Projects ---
        mini_projects_title: "プロジェクトショーケース",
        mini_projects_subtitle: "小規模なプロジェクト、実験、学術研究。",
        mini_chess_desc: "このチェスボットは、chess.comで私がプレイした約1500回の個人的な対局で訓練されました。ここをクリックして私に勝ってみてください。",
        mini_telegram_bot_desc: "Telegramボットは、CT Juniorの選考プロセスのキャッシュフロー生成を促進するために開発したインターフェースです。ボットにメッセージを送信すると、Googleスプレッドシートに売上が自動的に登録されます。",
        mini_terminal_games_desc: "ターミナルで動作するクラシックゲームの実装。",
        mini_ufes_desc: "コンピュータサイエンス課程で開発された学術プロジェクト集。",
        mini_logic_desc: "dogmasLogicaは、カトリックの教義を研究し、Prologのスキルを開発するために作成した個人的なプロジェクトです。",
        mini_go_project_desc: "Go (Golang) プログラミング言語を使用して現在開発中の新しいプロジェクト。",

        // --- Education Section ---
        education_title: "学歴",
        education_course: "コンピュータサイエンス",
        education_university: "エスピリトサント連邦大学 (UFES)",
        education_highlights_title: "主な科目:",
        education_highlights_list: "人工知能, コンパイラ, グラフ理論, オブジェクト指向プログラミング.",
        education_details_summary: "履修した全科目を見る",
        education_semester: "学期",

        // Status Labels
        sem_completed: "完了",
        sem_ongoing: "進行中",
        sem_pending: "保留中",

        // Semesters
        sem1_subjects: "プログラミングI, 微積分I, 計算理論の基礎, コンピュータサイエンス入門",
        sem2_subjects: "プログラミングII, 微積分II, 線形代数, デジタル論理素子, 計算論理I",
        sem3_subjects: "データ構造, 確率と統計, コンピュータアーキテクチャと構成, 微積分IV",
        sem4_subjects: "ソートと検索の技法, オペレーティングシステム, オブジェクト指向プログラミング, 形式言語とオートマトン, グラフ理論",
        sem5_subjects: "数値アルゴリズム, ソフトウェア工学I, コンピュータネットワーク, 計算論理II, 統合プロジェクトI",
        sem6_subjects: "コンピュータと社会, ソフトウェア工学II, プログラミングパラダイム, 計算理論",
        sem7_subjects: "データベースI, コンパイラ, 人工知能, アルゴリズムの設計と分析",
        sem8_subjects: "科学研究方法論",
        sem9_subjects: "卒業研究I",
        sem10_subjects: "卒業研究II",

        // --- Skills Section ---
        skills_title: "開発環境",
        skills_languages_title: "言語:",
        skills_frameworks_title: "フレームワークとライブラリ:",
        skills_tools_title: "ツールとエディタ:",

        // --- Footer & Links ---
        contact_title: "お問い合わせ",
        btn_view_more: "もっと見る",
        link_old_version: "旧バージョンにアクセス"
    },

    // =====================================================================
    // 🇧🇷 PORTUGUESE TRANSLATIONS
    // =====================================================================
    pt: {
        // --- Profile & Header ---
        page_title: "João Henrique Valbusa Lima - Portfólio",
        profile_name: "João Henrique Valbusa Lima",
        profile_title: "Estudante de Ciência da Computação na <strong>Universidade Federal do Espírito Santo (UFES)</strong>",
        profile_bio: "Fascinado pela área de Processamento de Linguagem Natural e desenvolvimento de jogos. Atualmente envolvido em projetos de pesquisa acadêmica, na empresa júnior e no GameLab da universidade.",

        // --- Projects Section ---
        projects_title: "Projetos Principais",
        nav_vitrine: "Vitrine",

        // Project 1
        project1_title: "Iniciação Científica: API para Reconhecimento de Entidades Químicas",
        project1_desc: "Durante dois anos de Iniciação Científica, contribuí para pesquisas em Processamento de Linguagem Natural com foco na área de química. No primeiro ano, estudei metodologias e ferramentas como o Unitex para a construção de regras para Reconhecimento de Entidades Nomeadas (REN), culminando na publicação de um artigo científico. No segundo ano, foquei no desenvolvimento de regras específicas para identificar compostos orgânicos e inorgânicos, aliando meu conhecimento técnico em química às necessidades do grupo de pesquisa.",
        tag_nlp: "Processamento de Linguagem Natural",
        details1_summary: "Ver resumo completo do artigo",
        details_abstract_title: "Resumo:",
        details1_abstract_content: "O Reconhecimento de Entidades Nomeadas (REN), é fundamental para atividades que envolvem processamento de texto e extração de informações. Este trabalho tem 2 objetivos: melhorar as Gramáticas Locais (GLs) existentes para o Reconhecimento de Entidades Nomeadas (REN) químicas, tornando-as mais abrangentes; e construir uma Application Programing Interface (API) que seja capaz de receber um arquivo de entrada, executar os scripts que aplicam tanto as GLs quanto o método híbrido Conditional Random Fields(CRF) e GL, e retornar um arquivo com o texto processado e com as entidades nomeadas anotadas. A metodologia inclui um estudo linguístico do domínio químico, estudo das GLs existentes para entidades químicas e alterações nas GLs. A API foi desenvolvida utilizando Shell Script e Makefile e foi submetida a testes funcionais. Os próximos passos do projeto envolvem a ampliação e refinamento das regras presentes nas GLs, visando maior precisão e abrangência no reconhecimento das entidades químicas, além da disponibilização da API por meio de uma interface web.",
        details_keywords_title: "Palavras-chave:",
        details1_keywords: "Gramáticas Locais, Reconhecimento de Entidades Nomeadas, Processamento de Linguagem Natural, Entidades Químicas.",
        project1_link_title: "Link da Publicação",

        // Project 2
        project2_title: "CT Junior",
        status_ongoing: "Em andamento",
        project2_desc: "Na CT Junior, atuei no desenvolvimento de soluções completas, criando interfaces modernas com React.js. Trabalhei na automação de processos complexos utilizando n8n e no desenvolvimento de agentes conversacionais e financeiros avançados com RAG (Retrieval-Augmented Generation). Para a persistência de dados, utilizei bancos como Supabase e PostgreSQL, entregando valor real através de tecnologias modernas.",
        tag_softeng: "Engenharia de Software",
        project2_link_title: "Acesse a CT Junior",

        // Project 3
        project3_title: "UFES GameLab",
        project3_desc: "No UFES GameLab, integrei uma equipe multidisciplinar (estatística, design e computação) para desenvolver um jogo original e educativo no Roblox focado em educação ambiental. Fui um dos responsáveis pela programação, desenvolvendo a lógica principal, sistemas de física, eventos, pontuação e colisões utilizando Luau. Além disso, adquiri conhecimentos básicos em modelagem 3D de assets utilizando Blender.",
        tag_gamedev: "Desenvolvimento de Jogos",
        project3_link_title: "Jogue no Roblox",

        // Project 4
        project4_title: "Projetos Pessoais",
        project4_desc: "Gosto de usar a programação para explorar ideias e aprender novas tecnologias. Aqui estão alguns dos meus projetos menores e experimentos acadêmicos.",
        project4_link_title: "Veja aqui minha vitrine de projetos",

		// --- Mini Projects ---
		mini_projects_title: "Vitrine de Projetos",
		mini_projects_subtitle: "Experimentos, estudos e projetos menores que demonstram minha paixão por código.",
		mini_calc_desc: "Uma calculadora simples com histórico de operações.",
		mini_weather_desc: "App de previsão do tempo consumindo API externa.",
		btn_view_code: "Ver Código",
		btn_view_live: "Ver Online",

        // --- Mini Projects details ---
        mini_chess_desc: "O bot de xadrez foi treinado com cerca de 1500 partidas pessoais jogadas no chess.com. Então tente me vencer clicando aqui.",
        mini_telegram_bot_desc: "O bot do Telegram é uma interface que desenvolvi para facilitar a geração do fluxo de caixa de uma etapa do processo seletivo da CT Junior. Uma mensagem ao bot cadastra as vendas automaticamente em uma planilha do Google Sheets.",
        mini_terminal_games_desc: "Implementação de jogos clássicos rodando puramente no terminal.",
        mini_ufes_desc: "Coleção de projetos acadêmicos desenvolvidos durante o curso de Ciência da Computação.",
        mini_logic_desc: "O dogmasLogica é um projeto pessoal que criei para estudar dogmas católicos e desenvolver minhas habilidades em Prolog.",
        mini_go_project_desc: "Um novo projeto em desenvolvimento utilizando a linguagem de programação Go (Golang).",


        // --- Education Section ---
        education_title: "Formação",
        education_course: "Ciência da Computação",
        education_university: "Universidade Federal do Espírito Santo (UFES)",
        education_highlights_title: "Disciplinas de Destaque:",
        education_highlights_list: "Inteligência Artificial, Compiladores, Teoria dos Grafos, Programação Orientada a Objetos.",
        education_details_summary: "Ver grade curricular completa",
        education_semester: "Período", 

        // Status Labels (Para serem usados no componente EducationCard)
        sem_completed: "Concluído",
        sem_ongoing: "Em andamento",
        sem_pending: "Pendente",

        // Semesters (Separados em chaves individuais para controle fino)
        sem1_subjects: "Programação I, Cálculo I, Aspectos Teóricos da Computação, Introdução à Ciência da Computação",
        sem2_subjects: "Programação II, Cálculo II, Álgebra Linear, Elementos de Lógica Digital, Lógica para Computação I",
        sem3_subjects: "Estrutura de Dados, Probabilidade e Estatística, Arquitetura e Organização de Computadores, Cálculo IV",
        sem4_subjects: "Técnicas de Busca e Ordenação, Sistemas Operacionais, Programação Orientada a Objetos, Linguagens Formais e Autômatos, Teoria dos Grafos",
        sem5_subjects: "Algoritmos Numéricos, Engenharia de Software I, Redes de Computadores, Lógica para Computação II, Projeto Integrado I",
        sem6_subjects: "Computação e Sociedade, Engenharia de Software II, Paradigmas de Programação, Teoria da Computação",
        sem7_subjects: "Banco de Dados I, Compiladores, Inteligência Artificial, Projeto e Análise de Algoritmos",
        sem8_subjects: "Metodologia de Pesquisa Científica",
        sem9_subjects: "Trabalho de Conclusão de Curso I",
        sem10_subjects: "Trabalho de Conclusão de Curso II",

        // --- Skills Section ---
        skills_title: "Ambiente de Desenvolvimento",
        skills_languages_title: "Linguagens:",
        skills_frameworks_title: "Frameworks e Bibliotecas:",
        skills_tools_title: "Ferramentas e Editores:",

        // --- Footer & Links ---
        contact_title: "Contato",
        btn_view_more: "Ver detalhes",
        link_old_version: "Acessar versão antiga"
    }
};
