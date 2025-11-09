import { LuArrowUpRight } from "react-icons/lu"


const ProjectCard = ({
    imgSrc,
    title,
    development,
    projetLink,
    technologies
}) => {

    const dataDevelopment = development.map((label, key) => (
        <span
            key={key}
            className="ProjectCard-div-data"
        >
            {label}
        </span>
    ))

    const dataTechnologies = technologies.map((icon, key) => (
        <figure 
            key={key}
            className="ProjectCard-figure-technologie">
            <img
                src={icon}
                width={35}
                height={35}
            />
        </figure>

    ))
    console.log(dataTechnologies)

    return (
        <div className="ProjectCard-div-card">
            <figure className="ProjectCard-figure">
                <img
                    src={imgSrc}
                    height={200}
                    alt={title}
                    loading="lazy"
                    className="ProjectCard-img"
                />
            </figure>

            <div className="ProjectCard-div-box">
                <div>
                    <h3 className="ProjectCard-h3">
                        {title}
                    </h3>

                    <div className="ProjectCard-div-box-development">
                        {dataDevelopment}
                    </div>
                </div>

                <div className="ProjectCard-div-box-arrow">
                    <span
                        className="ProjectCard-span-arrow"
                    >
                        <LuArrowUpRight />
                    </span>
                </div>
            </div>

            <a
                href={projetLink}
                target="_blank"
                className="ProjectCard-anchor-github"
            >
            </a>

            <div className="ProjectCard-div-box-technologies">
                {dataTechnologies}
            </div>
        </div>
    )
}

export default ProjectCard;