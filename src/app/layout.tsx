import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Neves | Desenvolvedor Full Stack",
    template: "%s | Gabriel Neves"
  },
  description:
    "Portfólio de Gabriel Neves, desenvolvedor full stack em evolução com experiência em suporte técnico, APIs, integrações e projetos reais com Next.js, Node.js e PostgreSQL.",
  keywords: [
    "Gabriel Neves",
    "desenvolvedor full stack",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "portfolio desenvolvedor"
  ],
  authors: [{ name: "Gabriel Neves" }],
  creator: "Gabriel Neves",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Gabriel Neves | Desenvolvedor Full Stack",
    description:
      "Projetos reais, stack full stack e trajetória técnica conectando suporte, produto e desenvolvimento.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gabriel Neves Portfolio"
  },
  twitter: {
    card: "summary",
    title: "Gabriel Neves | Desenvolvedor Full Stack",
    description:
      "Portfólio com projetos reais, stack full stack e evolução profissional em tecnologia."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#0D0B08",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
