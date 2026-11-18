import type { Metadata } from "next";
import Link from "next/link";
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
            <body>
                <header>
                    <nav>
                        <Link href="/">Início</Link>
                        {" | "}
                        <Link href="/sobre">Sobre</Link>
                        {" | "}
                        <Link href="/carateristicas">Carateristicas</Link>
                        {" | "}
                        <Link href="/tecnologias">Tecnologias</Link>
                        {" | "}
                    </nav>
                </header>

                {children}

                <footer>
                    © 2026 - Interfaces Modernas - @Criado por Pedro Santos
                </footer>
            </body>
        </html>
    );
}