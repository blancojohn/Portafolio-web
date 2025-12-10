import ProjectCard from "./ProjectCard";
import battlelship from "../assets/images/battlelship.png";
import mascotienda from "../assets/images/mascotienda.png";
import jsIcon from "../assets/images/javascript.svg";
import reactIcon from "../assets/images/react.svg";
import cssIcon from "../assets/images/css3.svg";
import bootstrapIcon from "../assets/images/bootstrap.svg";
import gitIcon from "../assets/images/git.svg";
import flaskIcon from "../assets/images/flask.svg";
import gitHubIcon from "../assets/images/gitHub.svg";
import pythonIcon from "../assets/images/python.svg";
import jwtIcon from "../assets/images/jwt.svg";
import sqlAlchemyIcon from "../assets/images/sqlAlchemy.svg";
import postgresIcon from "../assets/images/postgres.svg";

const dataCard = [
    {
        imgSrc: battlelship,
        title: 'Battle Ship',
        development: ['Algoritmia', 'Funciones', 'Diseño'],
        /* projectLink: 'https://github.com/blancojohn/BattlelShip-InReactJS', */
        https: 'https://battlelship-inreactjs.onrender.com',
        technologies: [jsIcon, reactIcon, cssIcon, bootstrapIcon, gitIcon, gitHubIcon]
    },

    {
        imgSrc: mascotienda,
        title: 'La Mascotienda',
        development: ['API', 'BaseDatos', 'Autenticación'],
        https: 'https://la-mascotienda.onrender.com',
        technologies: [pythonIcon, sqlAlchemyIcon, postgresIcon, flaskIcon, jwtIcon, gitHubIcon]
    },
    /*   {
          imgSrc: '/images/Battlelship.png',
          title: 'Star Wars',
          development: ['API', 'Ecommerce', 'Development'],
          projectLink: 'https://github.com/blancojohn/Ecommerce-StarWars-reading-list',
          technologies: []
      },  */
];

const projects = dataCard.map(({ imgSrc, title, development, https, technologies },
    key) => (
    <ProjectCard
        key={key}
        imgSrc={imgSrc}
        title={title}
        development={development}
        https={https}
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