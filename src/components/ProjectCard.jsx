import { LuArrowUpRight } from "react-icons/lu"


const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projetLink
}) => {

    const data = tags.map((label, key) => (
        <span
            key={key}
            className=""
        >
            {label}
        </span>
    ))
    return (
        <div className="ProjectCard-div-card">
            <figure className="ProjectCard-figure">
                <img
                    src={imgSrc}
                    height={180}
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

                    <div className="">
                        {data}
                    </div>
                </div>

                <div className="">


                    <span
                        className=""
                        aria-hidden=""
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
        </div>
    )
}

export default ProjectCard;