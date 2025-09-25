const Header = () => {
    return (
        <>
            <header className="Header-header">
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
                    <div className="">
                        <button
                            className="Header-menu-hamburguesa"
                            onClick={null}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        Navbar
                    </div>
                    <a href="/">Contáctame</a>
                </div>
            </header>
        </>
    )
}

export default Header








