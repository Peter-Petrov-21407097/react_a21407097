
import MagiaDoJSX from "@/components/MagiaDoJSX/MagiaDoJSX";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col gap-5">

            {/* Apresentação */}
            <section>
                <h2 className="text-xl font-bold">
                    Interfaces Modernas
                </h2>

                <p className="mt-2">
                    Bem-vindo à minha aplicação desenvolvida
                    com React e Next.js!
                </p>

                <p className="mt-2">
                    Este projeto apresenta algumas das principais
                    características e tecnologias utilizadas
                    no desenvolvimento web moderno.
                </p>
            </section>

            {/* Componente JSX */}
            <MagiaDoJSX />

            {/* Tecnologias */}
            <section className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="font-bold mb-2">
                    Tecnologias utilizadas
                </h3>

                <ul className="list-disc pl-5">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                </ul>
            </section>

            {/* Navegação */}
            <section className="flex flex-wrap gap-3">

                <Link
                    href="/caracteristicas"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                    Ver características
                </Link>

                <Link
                    href="/tecnologias"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                    Explorar tecnologias
                </Link>

            </section>

        </div>
    );
}

