function Projects() {
  const projects = [
    {
      id: 1,
      name: "Wikiquote",
      description:
        "A collaborative collection of sourced quotations from notable people, books, films, and speeches.", url: "https://www.wikiquote.org/"
    },
    {
      id: 2,
      name: "Wiktionary",
      description:
        "A multilingual online dictionary providing definitions, translations, and word origins.", url: "https://www.wiktionary.org/"
    },
    {
      id: 3,
      name: "Wikibooks",
      description:
        "A collection of free textbooks and instructional content written collaboratively.", url: "https://www.wikibooks.org/"
    }
  ];

  return (
    <div className="projects-page">
      <h1>Wikimedia Projects</h1>
      <p>
        Web-based, multilingual knowledge, and collaborative projects operated by the nonprofit Wikimedia Foundation.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {project.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;