
"use client";

import { useState } from "react";

interface ClassificacaoProps {
    rating: number;
}

export default function Classificacao({ rating }: ClassificacaoProps) {

    const [classificacao, setClassificacao] = useState(rating);
    const [hover, setHover] = useState<number | null>(null);

    const classificacaoVisivel = hover ?? classificacao;

    return (
        <div
            className="flex items-center gap-1"
            onMouseLeave={() => setHover(null)}
        >
            {[1, 2, 3, 4, 5].map((estrela) => {

                const ativa = estrela <= classificacaoVisivel;

                return (
                    <button
                        key={estrela}
                        type="button"
                        onMouseEnter={() => setHover(estrela)}
                        onClick={() => setClassificacao(estrela)}
                        aria-label={`Classificar com ${estrela} estrelas`}
                        aria-pressed={classificacao === estrela}
                        className="text-2xl cursor-pointer transition-transform hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            fill={ativa ? "#facc15" : "white"}
                            stroke="#d97706"
                            strokeWidth="1.5"
                        >
                            <path
                                d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z"
                            />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
}
