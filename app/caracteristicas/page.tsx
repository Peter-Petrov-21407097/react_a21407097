
export default function Page() {

    // Array de características
    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]

    // Renderização
    return (
        <div className="bg-blue-300 p-3 m-3 rounded-xl">
            <h2>Características do React e Next.js</h2>

            <ul>
                {caracteristicas.map((caracteristica, i) => {
                    return <li key={i}>{caracteristica}</li>
                })}
            </ul>
        </div>
    )
}
