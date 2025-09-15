const Header = () => {
    return (
        <>
            <header className="posicion-enlaces-navbar"> {/* Nombre de clase hace referencia área layout */}
                <nav>
                    <a href="/">Experiencia</a>
                    <a href="/">Proyectos</a>
                    <a href="/">Sobre mí</a>
                </nav>
            </header>
            <span className="posicion-enlace-formulario">
                <a href="/" className="estilos-enlace-formulario">Contáctame</a>
            </span>
            <span className="posicion-logo">
                <a href="/">LOGO</a>
            </span>

        </>
    )
}

export default Header
