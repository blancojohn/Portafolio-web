


const ProjectCard= ({
    imgSrc,
    title,
    tags,
    projetLink
})=> {

    const data= tags.map((label, key)=>(
        <span
            key= {key}
            className=""
        >
            {label}
        </span>
    ))
    return (
        <div>
            <figure>
                <img
                    src= {imgSrc}
                    alt= {title}
                    loading="lazy"
                    className=""
                />
            </figure>

            <div>
                <h3 className="">
                    {title}
                </h3>

                <div className="">
                    {data}
                </div>

                <div className="">
                    <span
                        className=""
                        aria-hidden=""
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            <a
                href={projetLink}
                target= "_blank"
                className=""
            >

            </a>
        </div>
    )
}

export default ProjectCard;