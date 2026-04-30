import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crisalmont.me"),
  title: {
    default: "Cristhian Altamirano Montes | Portafolio",
    template: "%s | Cristhian Altamirano Montes",
  },
  description: "Portafolio de Cristhian Altamirano Montes, estudiante de Ingeniería en Sistemas de Comunicación, enfocado en desarrollo web, bases de datos, sistemas digitales e inteligencia artificial aplicada.",
  keywords: ["Software Developer", "Ingeniería en Sistemas", "UNA", "Costa Rica", "Next.js", "React", "Data Science", "AI", "Desarrollo Web", "Bases de Datos"],
  authors: [{ name: "Cristhian Altamirano Montes", url: "https://github.com/crisalmont" }],
  creator: "Cristhian Altamirano Montes",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://crisalmont.me", // Reemplazar con la URL real si es diferente
    siteName: "Cristhian Altamirano Montes | Portafolio",
    title: "Cristhian Altamirano Montes | Portafolio",
    description: "Desarrollo de soluciones digitales robustas con enfoque en ingeniería, datos e IA.",
    images: [
      {
        url: "/og-image.png", // Asegurarse de que esta imagen exista o se genere
        width: 1200,
        height: 630,
        alt: "Cristhian Altamirano Montes | Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristhian Altamirano Montes | Portafolio",
    description: "Estudiante de Ingeniería en Sistemas enfocado en desarrollo web, datos e IA.",
    images: ["/og-image.png"],
    creator: "@crisalmont", // Reemplazar con el handle real si existe
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/30",
          inter.variable,
          outfit.variable,
          jetbrainsMono.variable
        )}
      >
        <div className="blueprint-grid fixed inset-0 -z-10 pointer-events-none opacity-50" />
        <Header />
        {children}
      </body>
    </html>
  );
}
