import { LuArrowUpRight } from "react-icons/lu"


const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projetLink,
    technologies
}) => {

    const data = tags.map((label, key) => (
        <span
            key={key}
            className="ProjectCard-div-data"
        >
            {label}
        </span>
    ))

    const dataTechnologies= technologies.map((icon, key) =>(
        <span
            key={key}
        >
            {icon}
        </span>
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

                    <div className="ProjectCard-div-box-data">
                        {data}
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
                className=""
            >

            </a>
            {technologies}
        </div>
    )
}

export default ProjectCard;