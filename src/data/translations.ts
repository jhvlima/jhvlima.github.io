// src/data/translations.ts
export const translations = {
    
    // =====================================================================
    // 🇺🇸 ENGLISH TRANSLATIONS
    // =====================================================================
    en: {
        // --- Profile & Header ---
        page_title: "João Henrique Valbusa Lima - Portfolio",
        profile_name: "João Henrique Valbusa Lima",
        profile_image_alt: "João Henrique's illustrated avatar",
        warning_title: "Translation Notice",
        warning_text: "This is an automated translation and has not yet been professionally reviewed neither complete.",
        skip_to_content: "Skip to content",
        opens_new_tab: "opens in a new tab",
        profile_title_before: "Computer Science Student at ",
        profile_title_highlight: "Federal University of Espírito Santo (UFES)",
        profile_title_after: "",
        profile_bio: "Fascinated by Natural Language Processing and game development. Currently involved in academic research projects, the junior enterprise, and the university's GameLab.",

        // --- Projects Section ---
        projects_title: "Main Projects",
        project_technologies_label: "Technologies used",
        nav_vitrine: "Showcase",
        nav_menu: "Menu",
        nav_label: "Main navigation",
        nav_skills: "Skills",
        
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
        mini_projects_subtitle: "Completed projects, experiments, and academic work.",
        mini_chess_title: "botChess",
        mini_n8n_workflows_title: "n8n-workflows",
        mini_telegram_bot_title: "Telegram Sales Bot",
        mini_terminal_games_title: "Terminal Games",
        mini_ufes_title: "UFES Projects",
        mini_logic_title: "Logic & Dogmas",
        mini_chess_desc: "Machine-learning pipeline that compares models for ranking legal moves, with a web interface, CLI, and UCI integration. In a historical experiment using 976 games and 33,131 examples, the selected model achieved 66.10% Top-5.",
        mini_n8n_workflows_desc: "Reusable pipeline of six workflows that discovers n8n projects, sanitizes data, generates initial AI-assisted documentation, and versions technical snapshots on GitHub. Daily maintenance publishes only changes detected by hash.",
        mini_telegram_bot_desc: "The Telegram bot is an interface I developed to facilitate the cash flow generation of a selection process stage at CT Junior. A message to the bot automatically registers sales in a Google Sheets spreadsheet.",
        mini_terminal_games_desc: "Classic games implementation running purely on the terminal.",
        mini_ufes_desc: "Collection of academic projects developed during my Computer Science course.",
        mini_logic_desc: "dogmasLogica is a personal project I created to study Catholic dogmas and develop my Prolog skills.",
        mini_go_project_desc: "A new project currently being developed using the Go (Golang) programming language.",
        mini_calc_desc: "A simple calculator with an operation history.",
        mini_weather_desc: "A weather forecast app powered by an external API.",
        btn_view_code: "View code",
        btn_view_live: "View online",

        // --- Education Section ---
        education_title: "Education",
        education_intro: "From chemistry to computing, a journey in progress. Open each stage to explore subjects, experiences, and projects.",
        education_level_technical: "Technical education",
        education_technical_course: "Technical Course in Chemistry",
        education_technical_institution: "Federal Institute of Espírito Santo (Ifes)",
        education_technical_description: "Technical education in Chemistry, before the undergraduate degree in Computer Science.",
        education_history_title: "Semesters and subjects",
        education_branches_label: "Academic history and undergraduate experiences",
        education_next_chapters: "Next chapters",
        education_continuation_description: "New experiences and projects will become part of this journey.",
        education_path_label: "Academic path",
        education_level_undergraduate: "Undergraduate degree",
        education_course: "Computer Science",
        education_university: "Federal University of Espírito Santo (UFES)",
        education_highlights_title: "Featured Courses:",
        education_details_summary: "Explore path by semester",
        education_period_hint: "Select a semester to view its subjects.",
        education_semester: "Semester",
        education_periods_label: "semesters",
        education_subject_singular: "subject",
        education_subject_plural: "subjects",
        education_continues: "The path continues",

        // Status Labels
        sem_completed: "Completed",
        sem_ongoing: "Ongoing",
        sem_pending: "Planned",

        // Academic items
        education_subject_programming_1: "Programming I",
        education_subject_calculus_1: "Calculus I",
        education_subject_theoretical_aspects_computing: "Theoretical Aspects of Computing",
        education_subject_introduction_computer_science: "Introduction to Computer Science",
        education_subject_programming_2: "Programming II",
        education_subject_calculus_2: "Calculus II",
        education_subject_linear_algebra: "Linear Algebra",
        education_subject_digital_logic: "Digital Logic Elements",
        education_subject_logic_computing_1: "Logic for Computing I",
        education_subject_data_structures: "Data Structures",
        education_subject_probability_statistics: "Probability and Statistics",
        education_subject_computer_architecture: "Computer Architecture and Organization",
        education_subject_calculus_4: "Calculus IV",
        education_subject_sorting_searching: "Sorting and Searching Techniques",
        education_subject_operating_systems: "Operating Systems",
        education_subject_object_oriented_programming: "Object-Oriented Programming",
        education_subject_formal_languages_automata: "Formal Languages and Automata",
        education_subject_graph_theory: "Graph Theory",
        education_subject_numerical_algorithms: "Numerical Algorithms",
        education_subject_software_engineering_1: "Software Engineering I",
        education_subject_computer_networks: "Computer Networks",
        education_subject_logic_computing_2: "Logic for Computing II",
        education_subject_integrated_project_1: "Integrated Project I",
        education_subject_computing_society: "Computing and Society",
        education_subject_software_engineering_2: "Software Engineering II",
        education_subject_programming_paradigms: "Programming Paradigms",
        education_subject_theory_computation: "Theory of Computation",
        education_subject_database_1: "Database I",
        education_subject_compilers: "Compilers",
        education_subject_artificial_intelligence: "Artificial Intelligence",
        education_subject_algorithm_design_analysis: "Algorithm Design and Analysis",
        education_subject_scientific_research_methodology: "Scientific Research Methodology",
        education_subject_mathematics_for_data_science: "Mathematics for Data Science",
        education_subject_data_science: "Data Science",
        education_subject_computer_graphics: "Computer Graphics",
        education_subject_final_project_1: "Final Project I",
        education_subject_final_project_2: "Final Project II",

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
        profile_image_alt: "ジョアン・エンリケのイラストアバター",
        warning_title: "翻訳に関するお知らせ",
        warning_text: "これは自動翻訳であり、まだ専門家によるレビューを受けておらず、不完全な場合があります。",
        skip_to_content: "コンテンツへ移動",
        opens_new_tab: "新しいタブで開きます",
        profile_title_before: "",
        profile_title_highlight: "エスピリトサント連邦大学 (UFES)",
        profile_title_after: " のコンピュータサイエンス学生",
        profile_bio: "自然言語処理とゲーム開発の分野に魅了されています。現在、学術研究プロジェクト、ジュニアエンタープライズ、大学のゲームラボに参加しています。",

        // --- Projects Section ---
        projects_title: "主なプロジェクト",
        project_technologies_label: "使用技術",
        nav_vitrine: "ショーケース",
        nav_menu: "メニュー",
        nav_label: "メインナビゲーション",
        nav_skills: "スキル",

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
        mini_projects_subtitle: "完成したプロジェクト、実験、学術的な取り組み。",
        mini_chess_title: "botChess",
        mini_n8n_workflows_title: "n8n-workflows",
        mini_telegram_bot_title: "Telegram販売ボット",
        mini_terminal_games_title: "ターミナルゲーム",
        mini_ufes_title: "UFESプロジェクト",
        mini_logic_title: "論理と教義",
        mini_chess_desc: "合法手のランキング用モデルを比較する機械学習パイプラインで、Webインターフェース、CLI、UCI連携を備えています。976局・33,131件の例を用いた過去の実験では、選択されたモデルがTop-5で66.10%を達成しました。",
        mini_n8n_workflows_desc: "n8nプロジェクトの検出、データのサニタイズ、AIによる初期ドキュメント生成、GitHubでの技術スナップショットのバージョン管理を行う、6つのワークフローからなる再利用可能なパイプラインです。日次メンテナンスでは、ハッシュで検出された変更のみを公開します。",
        mini_telegram_bot_desc: "Telegramボットは、CT Juniorの選考プロセスのキャッシュフロー生成を促進するために開発したインターフェースです。ボットにメッセージを送信すると、Googleスプレッドシートに売上が自動的に登録されます。",
        mini_terminal_games_desc: "ターミナルで動作するクラシックゲームの実装。",
        mini_ufes_desc: "コンピュータサイエンス課程で開発された学術プロジェクト集。",
        mini_logic_desc: "dogmasLogicaは、カトリックの教義を研究し、Prologのスキルを開発するために作成した個人的なプロジェクトです。",
        mini_go_project_desc: "Go (Golang) プログラミング言語を使用して現在開発中の新しいプロジェクト。",
        mini_calc_desc: "操作履歴付きのシンプルな電卓。",
        mini_weather_desc: "外部APIを利用した天気予報アプリ。",
        btn_view_code: "コードを見る",
        btn_view_live: "オンラインで見る",

        // --- Education Section ---
        education_title: "学歴",
        education_intro: "化学からコンピュータサイエンスへ、歩みは続きます。各段階を開くと、科目、経験、プロジェクトを確認できます。",
        education_level_technical: "専門教育",
        education_technical_course: "化学の専門課程",
        education_technical_institution: "エスピリトサント連邦教育機関（Ifes）",
        education_technical_description: "コンピュータサイエンスの学士課程に進む前に、化学の専門教育を受けました。",
        education_history_title: "学期と履修科目",
        education_branches_label: "学業の履歴と大学での経験",
        education_next_chapters: "次の章へ",
        education_continuation_description: "新しい経験とプロジェクトが、この歩みに加わっていきます。",
        education_path_label: "学びの軌跡",
        education_level_undergraduate: "学士課程",
        education_course: "コンピュータサイエンス",
        education_university: "エスピリトサント連邦大学 (UFES)",
        education_highlights_title: "主な科目:",
        education_details_summary: "学期ごとの履修経路を見る",
        education_period_hint: "学期を選択すると履修科目を確認できます。",
        education_semester: "学期",
        education_periods_label: "学期",
        education_subject_singular: "科目",
        education_subject_plural: "科目",
        education_continues: "学びはこれからも続きます",

        // Status Labels
        sem_completed: "完了",
        sem_ongoing: "進行中",
        sem_pending: "予定",

        // Academic items
        education_subject_programming_1: "プログラミングI",
        education_subject_calculus_1: "微積分I",
        education_subject_theoretical_aspects_computing: "計算理論の基礎",
        education_subject_introduction_computer_science: "コンピュータサイエンス入門",
        education_subject_programming_2: "プログラミングII",
        education_subject_calculus_2: "微積分II",
        education_subject_linear_algebra: "線形代数",
        education_subject_digital_logic: "デジタル論理素子",
        education_subject_logic_computing_1: "計算論理I",
        education_subject_data_structures: "データ構造",
        education_subject_probability_statistics: "確率と統計",
        education_subject_computer_architecture: "コンピュータアーキテクチャと構成",
        education_subject_calculus_4: "微積分IV",
        education_subject_sorting_searching: "ソートと検索の技法",
        education_subject_operating_systems: "オペレーティングシステム",
        education_subject_object_oriented_programming: "オブジェクト指向プログラミング",
        education_subject_formal_languages_automata: "形式言語とオートマトン",
        education_subject_graph_theory: "グラフ理論",
        education_subject_numerical_algorithms: "数値アルゴリズム",
        education_subject_software_engineering_1: "ソフトウェア工学I",
        education_subject_computer_networks: "コンピュータネットワーク",
        education_subject_logic_computing_2: "計算論理II",
        education_subject_integrated_project_1: "統合プロジェクトI",
        education_subject_computing_society: "コンピュータと社会",
        education_subject_software_engineering_2: "ソフトウェア工学II",
        education_subject_programming_paradigms: "プログラミングパラダイム",
        education_subject_theory_computation: "計算理論",
        education_subject_database_1: "データベースI",
        education_subject_compilers: "コンパイラ",
        education_subject_artificial_intelligence: "人工知能",
        education_subject_algorithm_design_analysis: "アルゴリズムの設計と分析",
        education_subject_scientific_research_methodology: "科学研究方法論",
        education_subject_mathematics_for_data_science: "データサイエンスのための数学",
        education_subject_data_science: "データサイエンス",
        education_subject_computer_graphics: "コンピュータグラフィックス",
        education_subject_final_project_1: "卒業研究I",
        education_subject_final_project_2: "卒業研究II",

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
        profile_image_alt: "Avatar ilustrado de João Henrique",
        warning_title: "Aviso de tradução",
        warning_text: "As traduções ainda não passaram por revisão profissional e podem estar incompletas.",
        skip_to_content: "Pular para o conteúdo",
        opens_new_tab: "abre em uma nova aba",
        profile_title_before: "Estudante de Ciência da Computação na ",
        profile_title_highlight: "Universidade Federal do Espírito Santo (UFES)",
        profile_title_after: "",
        profile_bio: "Fascinado pela área de Processamento de Linguagem Natural e desenvolvimento de jogos. Atualmente envolvido em projetos de pesquisa acadêmica, na empresa júnior e no GameLab da universidade.",

        // --- Projects Section ---
        projects_title: "Projetos Principais",
        project_technologies_label: "Tecnologias utilizadas",
        nav_vitrine: "Vitrine",
        nav_menu: "Menu",
        nav_label: "Navegação principal",
        nav_skills: "Competências",

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
		mini_projects_subtitle: "Projetos concluídos, experimentos e trabalhos acadêmicos.",
		mini_chess_title: "botChess",
		mini_n8n_workflows_title: "n8n-workflows",
		mini_telegram_bot_title: "Bot de Vendas para Telegram",
		mini_terminal_games_title: "Jogos de Terminal",
		mini_ufes_title: "Projetos UFES",
		mini_logic_title: "Lógica & Dogmas",
		mini_calc_desc: "Uma calculadora simples com histórico de operações.",
		mini_weather_desc: "App de previsão do tempo consumindo API externa.",
		btn_view_code: "Ver Código",
		btn_view_live: "Ver Online",

        // --- Mini Projects details ---
        mini_chess_desc: "Pipeline de Machine Learning que compara modelos para ranquear lances legais, com interface web, CLI e integração UCI. Em um experimento histórico com 976 partidas e 33.131 exemplos, o modelo selecionado alcançou Top-5 de 66,10%.",
        mini_n8n_workflows_desc: "Pipeline reutilizável com seis workflows que descobre projetos n8n, sanitiza dados, gera documentação inicial com IA e versiona snapshots técnicos no GitHub. A manutenção diária publica apenas mudanças detectadas por hash.",
        mini_telegram_bot_desc: "O bot do Telegram é uma interface que desenvolvi para facilitar a geração do fluxo de caixa de uma etapa do processo seletivo da CT Junior. Uma mensagem ao bot cadastra as vendas automaticamente em uma planilha do Google Sheets.",
        mini_terminal_games_desc: "Implementação de jogos clássicos rodando puramente no terminal.",
        mini_ufes_desc: "Coleção de projetos acadêmicos desenvolvidos durante o curso de Ciência da Computação.",
        mini_logic_desc: "O dogmasLogica é um projeto pessoal que criei para estudar dogmas católicos e desenvolver minhas habilidades em Prolog.",
        mini_go_project_desc: "Um novo projeto em desenvolvimento utilizando a linguagem de programação Go (Golang).",


        // --- Education Section ---
        education_title: "Formação",
        education_intro: "Da química à computação, uma trajetória em construção. Abra cada etapa para explorar disciplinas, experiências e projetos.",
        education_level_technical: "Formação técnica",
        education_technical_course: "Técnico em Química",
        education_technical_institution: "Instituto Federal do Espírito Santo (Ifes)",
        education_technical_description: "Formação técnica em Química, anterior à graduação em Ciência da Computação.",
        education_history_title: "Períodos e disciplinas",
        education_branches_label: "Histórico e experiências da graduação",
        education_next_chapters: "Próximos capítulos",
        education_continuation_description: "Novas experiências e projetos farão parte desta trajetória.",
        education_path_label: "Trajetória acadêmica",
        education_level_undergraduate: "Graduação",
        education_course: "Ciência da Computação",
        education_university: "Universidade Federal do Espírito Santo (UFES)",
        education_highlights_title: "Disciplinas de Destaque:",
        education_details_summary: "Ver trajetória por período",
        education_period_hint: "Selecione um período para ver suas disciplinas.",
        education_semester: "Período",
        education_periods_label: "períodos",
        education_subject_singular: "disciplina",
        education_subject_plural: "disciplinas",
        education_continues: "A trajetória continua",

        // Status Labels
        sem_completed: "Concluído",
        sem_ongoing: "Em andamento",
        sem_pending: "Planejado",

        // Itens acadêmicos
        education_subject_programming_1: "Programação I",
        education_subject_calculus_1: "Cálculo I",
        education_subject_theoretical_aspects_computing: "Aspectos Teóricos da Computação",
        education_subject_introduction_computer_science: "Introdução à Ciência da Computação",
        education_subject_programming_2: "Programação II",
        education_subject_calculus_2: "Cálculo II",
        education_subject_linear_algebra: "Álgebra Linear",
        education_subject_digital_logic: "Elementos de Lógica Digital",
        education_subject_logic_computing_1: "Lógica para Computação I",
        education_subject_data_structures: "Estrutura de Dados",
        education_subject_probability_statistics: "Probabilidade e Estatística",
        education_subject_computer_architecture: "Arquitetura e Organização de Computadores",
        education_subject_calculus_4: "Cálculo IV",
        education_subject_sorting_searching: "Técnicas de Busca e Ordenação",
        education_subject_operating_systems: "Sistemas Operacionais",
        education_subject_object_oriented_programming: "Programação Orientada a Objetos",
        education_subject_formal_languages_automata: "Linguagens Formais e Autômatos",
        education_subject_graph_theory: "Teoria dos Grafos",
        education_subject_numerical_algorithms: "Algoritmos Numéricos",
        education_subject_software_engineering_1: "Engenharia de Software I",
        education_subject_computer_networks: "Redes de Computadores",
        education_subject_logic_computing_2: "Lógica para Computação II",
        education_subject_integrated_project_1: "Projeto Integrado I",
        education_subject_computing_society: "Computação e Sociedade",
        education_subject_software_engineering_2: "Engenharia de Software II",
        education_subject_programming_paradigms: "Paradigmas de Programação",
        education_subject_theory_computation: "Teoria da Computação",
        education_subject_database_1: "Banco de Dados I",
        education_subject_compilers: "Compiladores",
        education_subject_artificial_intelligence: "Inteligência Artificial",
        education_subject_algorithm_design_analysis: "Projeto e Análise de Algoritmos",
        education_subject_scientific_research_methodology: "Metodologia de Pesquisa Científica",
        education_subject_mathematics_for_data_science: "Matemática para Ciência de Dados",
        education_subject_data_science: "Ciência de Dados",
        education_subject_computer_graphics: "Computação Gráfica",
        education_subject_final_project_1: "Trabalho de Conclusão de Curso I",
        education_subject_final_project_2: "Trabalho de Conclusão de Curso II",

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
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pt;
