
export default function MagiaDoJSX() {

    // Variáveis
    const magia = <strong>HTML dentro de JavaScript!</strong>
    const tecnologias = "React e Next.js"

    // Renderização
    return (
        <div className='bg-blue-300 p-3 m-3 rounded-xl'>
            <p>Este é o meu componente MagiaDoJSX.</p>
            <p>Um componente é uma função que retorna JSX - {magia}.</p>
            <p>As tecnologias utilizadas são {tecnologias}.</p>
        </div>
    )
}
