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
  title: "Cristhian Altamirano Montes | Software Developer",
  description: "Portafolio profesional de Cristhian Altamirano Montes, estudiante de Ingeniería en Sistemas de Comunicación en la UNA. Especialista en desarrollo web, datos e inteligencia artificial aplicada.",
  keywords: ["Software Developer", "Ingeniería en Sistemas", "UNA", "Costa Rica", "Next.js", "React", "Data Science", "AI"],
  authors: [{ name: "Cristhian Altamirano Montes" }],
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
