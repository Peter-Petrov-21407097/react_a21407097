
import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";
import Classificacao from "@/app/componentes/Classificacao";

interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

export default function Page() {

    // A. Dados
    const listaTecnologias: Tecnologia[] = JSON.parse(
        JSON.stringify(tecnologias)
    );

    // B. Renderização
    return (
        <div className="bg-blue-300 p-3 m-3 rounded-xl">

            <h2>Tecnologias Exploradas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {listaTecnologias.map((tecnologia) => (
                    <div
                        key={tecnologia.title}
                        className="bg-white p-5 rounded-xl flex flex-col items-center text-center shadow-md gap-3"
                    >
                        <Image
                            src={tecnologia.image}
                            alt={`Logótipo de ${tecnologia.title}`}
                            width={80}
                            height={80}
                        />

                        <h3>{tecnologia.title}</h3>

                        <p>{tecnologia.description}</p>

                        <div className="flex items-center gap-2">
                            <span>Classificação:</span>
                            <Classificacao rating={tecnologia.rating} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
