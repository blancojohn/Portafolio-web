import Navbar from "./Navbar"
import { useState } from "react"
import logo from "/src/assets/images/logo.svg";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
   const imagen= <img
        src={logo}
        width={70}
        height={70}
        alt="Logo"
    />
    console.log("LOGO", imagen)

    return (
        <>
            <header className="Header-header-container">
                <div className="Header-div">
                    <h1>
                        <a href="#bienvenido">
                            <img
                                src={logo}
                                width={70}
                                height={70}
                                alt="Logo"
                            />
                        </a>
                    </h1>
                    <div className="Header-div-box">
                        <button
                            className="Header-button-menu-hamburguesa"
                            onClick={() => setNavOpen((prev) => !prev)}
                        >
                            {
                                navOpen ? (
                                    "X"
                                ) : (
                                    <>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </>

                                )
                            }
                        </button>
                        <Navbar navOpen={navOpen} />
                    </div>
                    <a
                        href="#contactame"
                        className="Header-button-link-contactame--visibility"
                    >Contáctame
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header








