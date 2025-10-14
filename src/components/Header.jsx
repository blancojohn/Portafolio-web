import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <header className="Header-header-container">
                <div className="Header-div">
                    <h1>
                        <a href="/" className="">
                            <img
                                src="/"
                                width={40}
                                height={40}
                                alt="Logo"
                            />
                        </a>
                    </h1>
                    <div className="Header-div-display-botton">
                        <button
                            className="Header-menu-hamburguesa"
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
                        className="Header-contactame--visibility"
                    >Contáctame
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header








