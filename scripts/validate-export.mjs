import { readFile } from "node:fs/promises";

const checks = [
  {
    file: "out/index.html",
    includes: [
      "João Henrique Valbusa Lima",
      'id="projects"',
      'id="education"',
      'aria-labelledby="education-title"',
      'id="skills"',
      'id="contact"',
      'href="/antigo/v2/index.html"',
      "<details",
      "Graduação",
      "Ciência da Computação",
      "Trajetória acadêmica",
      "1º Período",
      "10º Período",
      "Programação I",
      "Trabalho de Conclusão de Curso II",
    ],
    excludes: [">Loading...</"],
    occurrences: [
      { value: "education-details education-program", count: 1 },
      { value: "education-details education-period", count: 10 },
    ],
  },
  {
    file: "out/vitrine/index.html",
    includes: [
      "Vitrine de Projetos",
      "botChess",
      "n8n-workflows",
      "https://github.com/jhvlima/botChess",
      "https://github.com/jhvlima/n8n-workflows",
    ],
    excludes: [
      ">Loading...",
      "myGames",
      "Novo Projeto em Go",
      "colab.research.google.com",
      "cerca de 1500",
    ],
  },
  {
    file: "out/404.html",
    includes: ['<meta name="robots" content="noindex"'],
    excludes: ['<meta name="robots" content="index, follow"'],
  },
  {
    file: "out/antigo/v2/index.html",
    includes: ['href="/vitrine/"'],
    excludes: ['href="projetos.html"'],
  },
  {
    file: "out/robots.txt",
    includes: ["Sitemap: https://jhvlima.github.io/sitemap.xml"],
    excludes: [],
  },
  {
    file: "out/sitemap.xml",
    includes: [
      "https://jhvlima.github.io/",
      "https://jhvlima.github.io/vitrine/",
    ],
    excludes: [],
  },
];

const failures = [];

for (const check of checks) {
  let contents;

  try {
    contents = await readFile(check.file, "utf8");
  } catch (error) {
    failures.push(`${check.file}: ${error.message}`);
    continue;
  }

  for (const expected of check.includes) {
    if (!contents.includes(expected)) {
      failures.push(`${check.file}: conteúdo esperado ausente: ${expected}`);
    }
  }

  for (const unexpected of check.excludes) {
    if (contents.includes(unexpected)) {
      failures.push(`${check.file}: conteúdo inesperado presente: ${unexpected}`);
    }
  }

  for (const occurrence of check.occurrences ?? []) {
    const actual = contents.split(occurrence.value).length - 1;

    if (actual !== occurrence.count) {
      failures.push(
        `${check.file}: esperado ${occurrence.count} ocorrência(s) de ${occurrence.value}, encontrado ${actual}`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("Falha na validação da exportação estática:\n");
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Exportação estática validada com sucesso.");
}
