import ProjectCard from "./ProjectCard";



const Projects = () => {
    const dataCard = [
        {
            imgSrc: '/images/Battlelship.png',
            title: 'Battle Ship',
            development: ['Algoritmia', 'Lógica', 'Diseño'],
            projectLink: 'https://github.com/blancojohn/BattlelShip-InReactJS',
            technologies: ['/images/javascript.svg', '/images/react.svg', '/images/css3.svg', '/images/bootstrap.svg', '/images/git.svg'] 
        },

        /* FUTUROS PROYECTOS  */

         {
            imgSrc: '/images/Battlelship.png',
            title: 'La Mascotienda',
            development: ['API', 'MVP', 'Desarrollo'],
            projectLink: 'https://github.com/The-Nick-J/Final-Project',
            technologies: []
        },
        {
            imgSrc: '/images/Battlelship.png',
            title: 'Star Wars',
            development: ['API', 'Ecommerce', 'Development'],
            projectLink: 'https://github.com/blancojohn/Ecommerce-StarWars-reading-list',
            technologies: []
        }, 
       
    ]

    const projects=  dataCard.map(({imgSrc, title, development, projectLink, technologies},
                        key) => (
                            <ProjectCard 
                                key={key} 
                                imgSrc={imgSrc} 
                                title={title} 
                                development={development} 
                                projetLink={projectLink}
                                technologies={technologies}
                            />
                        ))

    return (
        <section
            id="proyectos"
            className="section"
        >
            <div className="Project-div-container">
                <h2 className="Project-h2-headline">
                    Mis proyectos
                </h2>

                <div className="Project-div-grid-layout">
                    {projects}
                </div>
            </div>
        </section>
    )
}

export default Projects;