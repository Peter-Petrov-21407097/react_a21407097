
"use client";

import { useState, useEffect } from "react";

export default function Contador() {

    // Variáveis de estado
    const [contador, setContador] = useState(0);
    const [historico, setHistorico] = useState<number[]>([0]);


    // Carregar os dados do localStorage
    useEffect(() => {
        const contadorGuardado = localStorage.getItem("contador");
        const historicoGuardado = localStorage.getItem("historico");

        if (contadorGuardado !== null) {
            setContador(Number(contadorGuardado));
        }

        if (historicoGuardado !== null) {
            setHistorico(JSON.parse(historicoGuardado));
        }
    }, []);


    // Guardar os dados no localStorage
    useEffect(() => {
        localStorage.setItem("contador", contador.toString());
        localStorage.setItem("historico", JSON.stringify(historico));
    }, [contador, historico]);


    // Função para determinar a cor do contador
    function obterCor() {
        if (contador <= 3) {
            return "text-red-600";
        } else if (contador <= 7) {
            return "text-yellow-500";
        } else {
            return "text-green-600";
        }
    }


    // Função para incrementar o contador
    function incrementar() {
        if (contador < 10) {
            const novoValor = contador + 1;

            setContador(novoValor);
            setHistorico([...historico, novoValor]);
        }
    }


    // Função para decrementar o contador
    function decrementar() {
        if (contador > 0) {
            const novoValor = contador - 1;

            setContador(novoValor);
            setHistorico([...historico, novoValor]);
        }
    }


    // Função para fazer reset do contador
    function resetar() {
        setContador(0);
        setHistorico([...historico, 0]);
    }


    // Apresentação do contador
    return (
        <div className="flex flex-col items-center gap-5">

            {/* Valor atual do contador */}
            <h2 className={`text-2xl font-bold ${obterCor()}`}>
                Contador: {contador}
            </h2>


            {/* Botões de controlo */}
            <div className="flex gap-3">

                <button
                    onClick={incrementar}
                    disabled={contador === 10}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-40"
                >
                    Incrementar
                </button>

                <button
                    onClick={decrementar}
                    disabled={contador === 0}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-40"
                >
                    Decrementar
                </button>

                <button
                    onClick={resetar}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                >
                    Reset
                </button>

            </div>


            {/* Histórico dos valores */}
            <div className="mt-5 w-full">

                <h3 className="text-xl font-bold mb-3">
                    Histórico do Contador
                </h3>

                <ul className="flex flex-wrap gap-2">

                    {historico.map((valor, index) => (
                        <li
                            key={index}
                            className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg"
                        >
                            {valor}
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
}


