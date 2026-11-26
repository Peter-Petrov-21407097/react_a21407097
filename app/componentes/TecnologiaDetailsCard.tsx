
import Image from "next/image";
import Classificacao from "./Classificacao";
import ContadorPersonalizado from "./ContadorPersonalizado";

interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

interface TecnologiaDetailsCardProps {
    tecnologia: Tecnologia;
}

export default function TecnologiaDetailsCard({
    tecnologia,
}: TecnologiaDetailsCardProps) {

    return (
        <div className="bg-white p-5 rounded-xl flex flex-col items-center text-center shadow-md gap-3">

            <Image
                src={tecnologia.image}
                alt={`Logótipo de ${tecnologia.title}`}
                width={100}
                height={100}
            />

            <h2>{tecnologia.title}</h2>

            <p>{tecnologia.description}</p>

            <div className="flex items-center gap-2">
                <span>Classificação:</span>
                <Classificacao rating={tecnologia.rating} />
            </div>

            <ContadorPersonalizado title={tecnologia.title} />

        </div>
    );
}
