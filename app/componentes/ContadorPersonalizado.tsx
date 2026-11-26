
"use client";

import { useEffect, useState } from "react";

interface ContadorPersonalizadoProps {
    title: string;
}

export default function ContadorPersonalizado({
    title,
}: ContadorPersonalizadoProps) {

    const [likes, setLikes] = useState(0);
    const [carregado, setCarregado] = useState(false);

    // Carregar os likes guardados no localStorage
    useEffect(() => {
        const valorGuardado = localStorage.getItem(`likes-${title}`);

        if (valorGuardado !== null) {
            setLikes(Number(valorGuardado));
        }

        setCarregado(true);
    }, [title]);

    // Guardar os likes sempre que forem alterados
    useEffect(() => {
        if (carregado) {
            localStorage.setItem(`likes-${title}`, likes.toString());
        }
    }, [likes, title, carregado]);

    // Adicionar um like
    function adicionarLike() {
        setLikes((valorAtual) => valorAtual + 1);
    }

    // Remover um like
    function removerLike() {
        setLikes((valorAtual) => Math.max(0, valorAtual - 1));
    }

    return (
        <div className="flex gap-2">

            <button
                onClick={adicionarLike}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                👍 {likes}
            </button>

            <button
                onClick={removerLike}
                disabled={likes === 0}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                👎 -1
            </button>

        </div>
    );
}
