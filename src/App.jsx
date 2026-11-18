import './App.css'

const projects = [
  {
    title: 'Gestão de Tarefas',
    description: 'Aplicação para organizar e gerir tarefas.',
    url: 'https://peter-petrov-21407097.github.io/gestao-tarefas/',
  },
  {
    title: 'Portfolio',
    description: 'Página pessoal com os trabalhos realizados.',
    url: 'https://peter-petrov-21407097.github.io/',
  },
]

function App() {
  return (
    <main>
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Desenvolvimento Web</p>
        <h1 id="page-title">Trabalho de React</h1>
        <p className="subtitle">
          Projeto desenvolvido para a disciplina de Desenvolvimento Web.
        </p>
      </section>

      <section className="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Outros trabalhos</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.url}
            >
              <span className="project-title">{project.title}</span>
              <span className="project-description">{project.description}</span>
              <span className="project-link" aria-hidden="true">Ver projeto →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
