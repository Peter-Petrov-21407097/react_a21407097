
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/app/componentes/TecnologiaCard";

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
                    <TecnologiaCard
                        key={tecnologia.title}
                        tecnologia={tecnologia}
                    />
                ))}

            </div>
        </div>
    );
}
