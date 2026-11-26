
import Image from "next/image";
import Classificacao from "./Classificacao";
import ContadorPersonalizado from "./ContadorPersonalizado";

interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

interface TecnologiaCardProps {
    tecnologia: Tecnologia;
}

export default function TecnologiaCard({
    tecnologia,
}: TecnologiaCardProps) {

    return (
        <div className="bg-white p-5 rounded-xl flex flex-col items-center text-center shadow-md gap-3">

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

            <ContadorPersonalizado title={tecnologia.title} />

        </div>
    );
}
