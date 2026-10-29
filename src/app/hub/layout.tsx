import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hub de Projetos",
  description:
    "Projetos concluídos e experimentos de João Henrique Lima em Machine Learning, automação, lógica e desenvolvimento de software.",
  alternates: {
    canonical: "/hub/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/hub/",
    siteName: "Portfólio de João Henrique Lima",
    title: "Hub de Projetos | João Henrique Lima",
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
    title: "Hub de Projetos | João Henrique Lima",
    description:
      "Projetos concluídos e experimentos em Machine Learning, automação, lógica e desenvolvimento de software.",
    images: ["/images/profile.png"],
  },
};

export default function HubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
