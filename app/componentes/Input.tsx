
"use client";

import { useState, type FormEvent } from "react";

type Tarefa = {
    id: number;
    texto: string;
};

export default function Input() {
    // 1. Estado do input de texto
    const [texto, setTexto] = useState("");

    // 2. Estado do seletor
    const [tecnologia, setTecnologia] = useState("React");

    // 3. Estado da lista de tarefas
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    // 4. Estado da edição de tarefas
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [textoEdicao, setTextoEdicao] = useState("");

    // Adicionar tarefa
    function adicionarTarefa(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const tarefaLimpa = novaTarefa.trim();

        if (tarefaLimpa === "") return;

        const tarefa: Tarefa = {
            id: Date.now(),
            texto: tarefaLimpa,
        };

        setTarefas((lista) => [...lista, tarefa]);
        setNovaTarefa("");
    }

    // Começar a editar
    function iniciarEdicao(tarefa: Tarefa) {
        setEditandoId(tarefa.id);
        setTextoEdicao(tarefa.texto);
    }

    // Guardar edição
    function guardarEdicao(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const textoLimpo = textoEdicao.trim();

        if (textoLimpo === "") return;

        setTarefas((lista) =>
            lista.map((tarefa) =>
                tarefa.id === editandoId
                    ? { ...tarefa, texto: textoLimpo }
                    : tarefa
            )
        );

        setEditandoId(null);
        setTextoEdicao("");
    }

    // Cancelar edição
    function cancelarEdicao() {
        setEditandoId(null);
        setTextoEdicao("");
    }

    // Apagar tarefa
    function apagarTarefa(id: number) {
        setTarefas((lista) =>
            lista.filter((tarefa) => tarefa.id !== id)
        );

        if (editandoId === id) {
            cancelarEdicao();
        }
    }

    return (
        <div className="flex flex-col gap-8">

            {/* SECÇÃO 1 - INPUT DE TEXTO */}
            <section className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    1. Input de texto
                </h2>

                <label className="block font-medium mb-2" htmlFor="texto">
                    Escreve alguma coisa:
                </label>

                <input
                    id="texto"
                    type="text"
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                    placeholder="Escreve aqui..."
                    className="w-full border border-gray-300 rounded-lg p-3"
                />

                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                    <p className="font-semibold">
                        Texto digitado:
                    </p>

                    <p className="mt-2 break-words">
                        {texto || "Ainda não escreveste nada."}
                    </p>
                </div>
            </section>

            {/* SECÇÃO 2 - SELETOR */}
            <section className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    2. Seletor de tecnologias
                </h2>

                <label className="block font-medium mb-2" htmlFor="tecnologia">
                    Escolhe uma tecnologia:
                </label>

                <select
                    id="tecnologia"
                    value={tecnologia}
                    onChange={(event) => setTecnologia(event.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-white"
                >
                    <option value="React">React</option>
                    <option value="Next.js">Next.js</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="HTML e CSS">HTML e CSS</option>
                    <option value="Tailwind CSS">Tailwind CSS</option>
                </select>

                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                    <p>
                        Tecnologia selecionada:{" "}
                        <strong>{tecnologia}</strong>
                    </p>
                </div>
            </section>

            {/* SECÇÃO 3 - LISTA DE TAREFAS */}
            <section className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    3. Lista de tarefas
                </h2>

                <form onSubmit={adicionarTarefa} className="flex gap-2">
                    <input
                        type="text"
                        value={novaTarefa}
                        onChange={(event) => setNovaTarefa(event.target.value)}
                        placeholder="Nova tarefa..."
                        className="flex-1 min-w-0 border border-gray-300 rounded-lg p-3"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Inserir
                    </button>
                </form>

                <ul className="mt-5 flex flex-col gap-3">
                    {tarefas.length === 0 ? (
                        <li className="text-gray-500 text-center p-4">
                            Ainda não existem tarefas.
                        </li>
                    ) : (
                        tarefas.map((tarefa) => (
                            <li
                                key={tarefa.id}
                                className="bg-blue-100 p-3 rounded-lg flex flex-wrap items-center justify-between gap-3"
                            >
                                {editandoId === tarefa.id ? (
                                    <form
                                        onSubmit={guardarEdicao}
                                        className="flex flex-1 flex-wrap gap-2"
                                    >
                                        <input
                                            type="text"
                                            value={textoEdicao}
                                            onChange={(event) =>
                                                setTextoEdicao(event.target.value)
                                            }
                                            className="flex-1 min-w-0 border border-gray-300 rounded-lg p-2"
                                            autoFocus
                                        />

                                        <button
                                            type="submit"
                                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
                                        >
                                            Guardar
                                        </button>

                                        <button
                                            type="button"
                                            onClick={cancelarEdicao}
                                            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg"
                                        >
                                            Cancelar
                                        </button>
                                    </form>
                                ) : (
                                    <>
                                        <span className="flex-1 break-words">
                                            {tarefa.texto}
                                        </span>

                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => iniciarEdicao(tarefa)}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => apagarTarefa(tarefa.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                                            >
                                                Apagar
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                    )}
                </ul>

                <p className="mt-4 text-gray-600 text-sm">
                    Total de tarefas: {tarefas.length}
                </p>
            </section>

        </div>
    );
}
