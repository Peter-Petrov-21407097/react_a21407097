
"use client";

import { useEffect, useState } from "react";

interface ContadorPersonalizadoProps {
    title: string;
}

export default function ContadorPersonalizado({
    title,
}: ContadorPersonalizadoProps) {

    // A. Gestão de estados
    const [likes, setLikes] = useState(0);

    // B. Identificação no localStorage
    const chave = `likes-${title}`;

    // C. Carregar os likes guardados
    useEffect(() => {
        const valorGuardado = localStorage.getItem(chave);

        if (valorGuardado !== null) {
            setLikes(Number(valorGuardado));
        }
    }, [chave]);

    // D. Incrementar os likes
    function adicionarLike() {
        const novaContagem = likes + 1;

        setLikes(novaContagem);

        localStorage.setItem(
            chave,
            String(novaContagem)
        );
    }

    // E. Renderização
    return (
        <button
            onClick={adicionarLike}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
            👍 {likes}
        </button>
    );
}
