"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
    const [hora, setHora] = useState<Date | null>(null);

    useEffect(() => {
        // Atualizar imediatamente
        setHora(new Date());

        // Atualizar a cada segundo
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        // Limpar o intervalo quando o componente deixar de existir
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="text-center">
            <p className="font-semibold">
                Hora atual
            </p>

            <p className="text-xl font-bold text-blue-700">
                {hora ? hora.toLocaleTimeString("pt-PT") : "--:--:--"}
            </p>
        </div>
    );
}