import Contador from "@/app/componentes/Contador";

export default function ContadorPage() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
                Página do Contador
            </h1>

            <Contador />
        </div>
    );
}

