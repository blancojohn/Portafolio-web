import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <header className="Header-header-container">
                <div className="Header-div">
                    <h1>
                        <a href="#bienvenido">
                            <img
                                src="/images/logo.svg"
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








