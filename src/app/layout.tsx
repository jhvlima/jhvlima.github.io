import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/NavBar";
import SkipLink from "@/components/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhvlima.github.io"),
  title: {
    default: "João Henrique Lima | Portfólio",
    template: "%s | João Henrique Lima",
  },
  description:
    "Portfólio de João Henrique Lima, estudante de Ciência da Computação na UFES com projetos em PLN, desenvolvimento web, automação e jogos.",
  authors: [{ name: "João Henrique Valbusa Lima" }],
  creator: "João Henrique Valbusa Lima",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Portfólio de João Henrique Lima",
    title: "João Henrique Lima | Portfólio",
    description:
      "Projetos em PLN, desenvolvimento web, automação e jogos desenvolvidos por João Henrique Lima.",
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
    title: "João Henrique Lima | Portfólio",
    description:
      "Projetos em PLN, desenvolvimento web, automação e jogos desenvolvidos por João Henrique Lima.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>
        <LanguageProvider>
          <SkipLink />
          <Navbar />
          <main
            id="main-content"
            tabIndex={-1}
            className="scroll-mt-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          >
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
