import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vitrine de Projetos",
  description:
    "Projetos concluídos e experimentos de João Henrique Lima em Machine Learning, automação, lógica e desenvolvimento de software.",
  alternates: {
    canonical: "/vitrine/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/vitrine/",
    siteName: "Portfólio de João Henrique Lima",
    title: "Vitrine de Projetos | João Henrique Lima",
    description:
      "Projetos concluídos e experimentos em Machine Learning, automação, lógica e desenvolvimento de software.",
    images: [
      {
        url: "/images/profile.png",
        width: 460,
        height: 460,
        alt: "João Henrique Lima",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Vitrine de Projetos | João Henrique Lima",
    description:
      "Projetos concluídos e experimentos em Machine Learning, automação, lógica e desenvolvimento de software.",
    images: ["/images/profile.png"],
  },
};

export default function VitrineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
