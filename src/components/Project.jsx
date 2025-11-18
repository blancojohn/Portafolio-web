import ProjectCard from "./ProjectCard";
import battlelship from "../assets/images/battlelship.png";
import jsIcon from "../assets/images/javascript.svg";
import reactIcon from "../assets/images/react.svg";
import cssIcon from "../assets/images/css3.svg";
import bootstrapIcon from "../assets/images/bootstrap.svg";
import gitIcon from "../assets/images/git.svg";

const dataCard = [
    {
        imgSrc: battlelship,
        title: 'Battle Ship',
        development: ['Algoritmia', 'Lógica', 'Diseño'],
        projectLink: 'https://github.com/blancojohn/BattlelShip-InReactJS',
        technologies: [jsIcon, reactIcon, cssIcon, bootstrapIcon, gitIcon]
    },

    /* FUTUROS PROYECTOS  */

  /*   {
        imgSrc: '/images/Battlelship.png',
        title: 'La Mascotienda',
        development: ['API', 'MVP', 'Desarrollo'],
        projectLink: 'https://github.com/The-Nick-J/Final-Project',
        technologies: []
    }, */
    /*   {
          imgSrc: '/images/Battlelship.png',
          title: 'Star Wars',
          development: ['API', 'Ecommerce', 'Development'],
          projectLink: 'https://github.com/blancojohn/Ecommerce-StarWars-reading-list',
          technologies: []
      },  */
];

console.log("CARD BATTELSHIP", dataCard[0])

const projects = dataCard.map(({ imgSrc, title, development, projectLink, technologies },
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

const Project = () => {
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

export default Project;