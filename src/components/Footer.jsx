import { ButtonPrimary } from "./Button";
import { LuArrowRight } from "react-icons/lu";

const dataSiteMap = [
    {
        label: 'Bienvenido',
        href: '#bienvenido'
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

const siteMap = dataSiteMap.map(({ label, href }, key) => (
    <li key={key}>
        <a
            href={href}
            className=""
        >
            {label}
        </a>
    </li>
));

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

const socials = dataSocials.map(({ label, href }, key) => (
    <li key={key}>
        <a
            href={href}
            className=""
            target="_blank"
        >
            {label}
        </a>
    </li>
))



const Footer = () => {
    return (
        <footer className="">
            <div className="Footer-div-container">

                <div className="">

                    <div className="">
                        <h2 className="Footer-h2">
                            Trabajemos juntos hoy
                        </h2>

                        <ButtonPrimary
                            href="mailto:johnmario.bdc@gmail.com"
                            label="Vamos a una entrevista"
                            icon={<LuArrowRight />}
                        />
                    </div>

                    <div className="">
                        <div>
                            <p className="">Ir a:</p>
                            <ul>
                                {siteMap}
                            </ul>
                        </div>

                        <div>
                            <p className="">Medios sociales:</p>
                            <ul>
                                {socials}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="">
                    <a
                        href=""
                        className=""
                    >
                        <img
                            src="/images/logo.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>
                    <p className="">
                        Me inspiré de codewithsadee para la construcción de mi portafolio
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;