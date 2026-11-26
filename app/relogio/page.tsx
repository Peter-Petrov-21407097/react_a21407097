
import Relogio from "@/app/componentes/Relogio";

export default function RelogioPage() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
                Página do Relógio
            </h1>

            <p>
                Este componente apresenta a hora atual,
                atualizando automaticamente todos os segundos.
            </p>

            <div className="bg-white p-8 rounded-xl shadow text-center">
                <Relogio />
            </div>
        </div>
    );
}
