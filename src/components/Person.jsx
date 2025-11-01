import { ButtonOutline, ButtonPrimary } from "./Button"
import { LuDownload } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";

const Person = () => {
    let iconDownload= <LuDownload />;
    let iconScrollDown= <LuArrowDown />;

    return (
        <section
            id="home"
            className="Person-section"
        >
            <div className="Person-div-container">

                <div className="Person-div-display">
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
                        Creación de sitios web modernos y escalables
                    </h2>

                    <div className="Person-buttons-box">
                        <ButtonPrimary label={"Download CV"} icon={iconDownload}/>

                        <ButtonOutline label={"Scroll down"} icon={iconScrollDown} href={"#sobre-mi"}/>
                    </div>
                </div>

                <div className="Person-photo-box">
                    <figure className="Person-figure-background">
                        <img
                            src="/images/jb-foto.png"
                            width={500} 
                            height={420}
                            alt="John Blanco"
                            className="Person-img"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Person