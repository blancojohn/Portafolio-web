import { useRef, useEffect } from "react";


const Navbar = ({ navOpen }) => {

    const lastActiveLink = useRef();
    const activeBox = useRef()

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    };


    useEffect(initActiveBox, [])

    const dataForNavbar = [
        {
            label: 'Bienvenido',
            link: '#bienvenido',
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

    let itemsNavbar = dataForNavbar.map(({ label, link, className, ref }, key) => (
        <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
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