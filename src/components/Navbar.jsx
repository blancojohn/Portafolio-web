import { useRef } from "react";


const Navbar = () => {

    const lastActiveLink = useRef();
    const activeBox= useRef()

    const dataForNavbar = [
        {
            label: 'Bienvenido',
            link: '#bienvenido',
            className: 'Nav-link--active',
            ref: lastActiveLink
        },
        {
            label: 'Sobre mí',
            link: '#sobre-mi',
            className: 'Nav-link'
        },
        {
            label: 'Proyectos',
            link: '#proyectos',
            className: 'Nav-link'
        },
        {
            label: 'Contáctame',
            link: '#contactame',
            className: 'Nav-link--hidden'
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
            <nav className="">
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