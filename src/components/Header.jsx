const Header = () => {
    return (
        <>
            {/* cada elemento <header se alinea y posiciona en las cuadrículas de la grid según columnas y filas */}

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
                            className=""
                            onClick={null}
                        >
                            <spa>
                                Menú
                            </spa>
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






