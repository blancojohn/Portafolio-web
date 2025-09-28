import { useRef } from "react";


const Navbar = () => {

    const lastActiveLink = useRef();

    const dataForNavbar = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    let itemsNavbar= dataForNavbar.map(({ label, link, className, ref }, key) => (
        <a
            href={link}
            key={ref}
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
            </nav>
        </>
    )
}

export default Navbar