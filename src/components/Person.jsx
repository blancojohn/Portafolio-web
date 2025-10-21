


const Person = () => {
    return (
        <section
            id="home"
            className="Person-section"
        >
            <div className="Person-div-container">

                <div>
                    <div className="Person-div-intro">
                        <figure className="Person-avatar-box">
                            <img
                                src="/images/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="John Blanco"
                                className="Person-avatar"
                            />
                        </figure>

                        <div className="Person-div-text-availability">
                            <span className="Person-ping-container">
                                <span className="Person-ping"></span>
                            </span>

                            Disponible para trabajar
                        </div>
                    </div>

                    <h2 className="Person-h2-headline">
                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="">
                        ButtonPrimary

                        ButonOutline
                    </div>
                </div>

                <div className="">
                    <figure className="">
                        <img
                            src="/images/jb-foto.png"
                            width={656}
                            height={800}
                            alt="John Blanco"
                            className=""
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Person