import ProjectCard from "./ProjectCard";



const Projects = () => {
    const data = [
        {
            imgSrc: '',
            title: 'La Mascotienda',
            tags: ['API', 'MVP', 'Desarrollo'],
            projectLink: 'https://github.com/The-Nick-J/Final-Project'
        },
        {
            imgSrc: '',
            title: 'Battle Ship',
            tags: ['Juego', 'Lógica', 'Front-end'],
            projectLink: 'https://github.com/blancojohn/BattlelShip-InReactJS'
        },
        {
            imgSrc: '',
            title: 'Star Wars',
            tags: ['API', 'Ecommerce', 'Development'],
            projectLink: 'https://github.com/blancojohn/Ecommerce-StarWars-reading-list'
        },
    ]

    const projects=  data.map(({imgSrc, title, tags, projectLink},
                        key) => (
                            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projetLink={projectLink}/>
                        ))

    return (
        <section
            id="project"
            className="section"
        >
            <div className="container">
                <h2 className="headline">
                    Mis proyectos
                </h2>

                <div className="">
                    {projects}
                </div>
            </div>
        </section>
    )
}

export default Projects;