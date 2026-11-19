
import type { Metadata } from "next";
import Link from "next/link";
import AnoAtual from "@/components/MagiaDoJSX/MagiaDoJSX/AnoAtual";
import "./globals.css";

export const metadata: Metadata = {
    title: "Interfaces Modernas",
    description: "Aplicação React e Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className="flex flex-col justify-start gap-4 p-5 items-center min-h-screen">

                <header className="flex flex-col items-center">
                    <h1>React & Next.js</h1>

                    <nav className="flex gap-4">
                        <Link href="/">Início</Link>
                        <Link href="/sobre">Sobre</Link>
                        <Link href="/caracteristicas">Características</Link>
                        <Link href="/tecnologias">Tecnologias</Link>
                    </nav>
                </header>

                <main className="bg-blue-200 p-5 rounded-2xl max-w-2xl w-full">
                    {children}
                </main>

                <footer>
                    © <AnoAtual /> - Interfaces Modernas - Criado por Pedro Santos
                </footer>

            </body>
        </html>
    );
}
