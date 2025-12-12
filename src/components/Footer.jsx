import { ButtonPrimary } from "./Button";
import { LuArrowRight } from "react-icons/lu";
import logo from "../assets/images/logo.svg";


const dataSiteMap = [
    {
        label: 'Inicio',
        href: '#inicio'
    },
    {
        label: 'Sobre Mí',
        href: '#sobre-mi'
    },
    {
        label: 'Proyectos',
        href: '#proyectos'
    },
    {
        label: 'Contáctame',
        href: '#contactame'
    }
];

const dataSocials = [
    {
        label: 'GitHub',
        href: 'https://github.com/blancojohn'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/john-blanco-dc/'
    },
];

const dataInspiration = [
    {
        label: 'Github codewithsadee',
        href: 'https://www.github.com/codewithsadee-org',
    },
    {
        label: 'LinkedIn codewithsadee',
        href: 'https://www.linkedin.com/in/codewithsadee'
    }
];

const siteMap = dataSiteMap.map(({ label, href }, key) => (
    <li key={key}>
        <a
            href={href}
            className="Footer-anchor-sitemap-socials"
        >
            {label}
        </a>
    </li>
));

const socials = dataSocials.map(({ label, href }, key) => (
    <li key={key}>
        <a
            href={href}
            className="Footer-anchor-sitemap-socials"
            target="_blank"
        >
            {label}
        </a>
    </li>
))

const inspiration = dataInspiration.map(({ label, href }, key) => (
        <a
            key={key}
            href={href}
            className="Footer-anchor-inspiration"
            target="_blank"
        >
            {label}
        </a>
))



const Footer = () => {
    return (
        <footer className="Footer-footer">
            <div className="Footer-div-container">

                <div className="Footer-div-box">

                    <div className="Footer-div-content-h2-ButtonPrimary">
                        <h2 className="Footer-h2">
                            Comencemos a trabajar juntos
                        </h2>

                        <ButtonPrimary
                            href="mailto:johnmario.bdc@gmail.com"
                            label="Vamos a una entrevista"
                            icon={<LuArrowRight />}
                        />
                    </div>

                    <div className="Footer-div-content-sitemap-socials">
                        <div>
                            <p>Ir a:</p>
                            <ul className="Footer-ul-sitemap-socials">
                                {siteMap}
                            </ul>
                        </div>

                        <div>
                            <p>Medios sociales:</p>
                            <ul className="Footer-ul-sitemap-socials">
                                {socials}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="Footer-div-box-logo-text">
                    <a
                        href="#inicio"
                    >
                        <img
                            src={logo}
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>
                    <div>
                        <p className="Footer-p-inspiration">
                            La inspiración para la creación de este portafolio vino de codewithsadee:
                        </p>
                        <div className="Footer-div-inspiration">
                            {inspiration}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;