import { useRef } from "react";


const Navbar = ({ navOpen }) => {

    const lastActiveLink = useRef();
    const activeBox= useRef()

    const dataForNavbar = [
        {
            label: 'Inicio',
            link: '#inicio',
            className: 'Navbar-link--active',
            ref: lastActiveLink
        },
        {
            label: 'Sobre mí',
            link: '#sobre-mi',
            className: 'Navbar-link'
        },
        {
            label: 'Proyectos',
            link: '#proyectos',
            className: 'Navbar-link'
        },
        {
            label: 'Contáctame',
            link: '#contactame',
            className: 'Navbar-contactame--visibility'
        }
    ];

    let itemsNavbar= dataForNavbar.map(({ label, link, className, ref }, key) => (
        <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={null}
        >
            {label}
        </a>
    ))

    return (
        <>
            <nav className={"Navbar-nav--visibility " + (navOpen ? "active" : "")}>
                {
                    itemsNavbar
                }
                <div
                className="active-box"
                ref={activeBox}
                ></div>
            </nav>
        </>
    )
}

export default Navbar