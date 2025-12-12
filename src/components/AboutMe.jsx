import logo from "../assets/images/logo.svg"


const dataAboutMeItems = [
    /*
    POR MI EXPERIENCIA HASTA AHORA NO DEBO MOSTRAR ESTO
    {
      label: 'Project done',
      number: 45
    }, */
    {
        label: 'Experiencia profesional',
        number: 1
    }
];

const aboutMeItems = dataAboutMeItems.map(({ label, number }, key) => (
    <div key={key}>
        <div className="AboutMe-div-items">
            <span className="AboutMe-span-number">{number}</span>
            <span className="AboutMe-span-symbol">+</span>
        </div>
        <p className="AboutMe-items-p">{label}</p>
    </div>
));

const AboutMe = () => {
    return (
        <section
            id="sobre-mi"
            className="AboutMe-section"
        >
            <div className="AboutMe-div-container">

                <div className="AboutMe-div-box">

                    <p className="AboutMe-p">
                        Hola, soy John Blanco, con el tiempo me terminan diciendo John White, Desarrollador Junior Full Stack.
                        Conocí el Desarrollo de Software hace dos años por la curiosidad que me generó la insistente publicidad de diplomados
                        en internet y me inscribí en una certificación oficial en 4Geeks Academy Chile, la cual terminé a mediados del año 2023.
                        Si deseas ver el documento acreditado puedes hacer click en <a href="https://certificate.4geeks.com/cc5a7e11b2d930ad89ee3e213418b1b6f93a64c2" target="_blank">ver certificado</a>.
                        Tengo experiencia en el desarrollo Full Stack de una aplicación web de comercio electrónico. Junto a mi equipo de estudio, creé un MVP.
                        Mi background profesional es Administración de Empresas, con una destacada trayectoria en el área de Marketing y Ventas B2B.

                    </p>
                    <p className="AboutMe-p">
                        Mis habilidades de cooperaración, gestión y comunicación, me permitieron guiar a mi equipo en las metodologías de desarrollo ágiles en la fase de la creación de nuestro proyecto final
                        para obtener la certificación. Una anécdota interesante que me sucedió en este punto, es que me sorprendí al ver como mís habilidades desarrolladas por mi background comercial, fueron de gran importancia para entregar satisfactoriamente el MVP en el tiempo establecido.
                        Considero que es importante tener un plan de trabajo definido y estructurado, que permita descomponer en varios sprints el producto final.
                        Gracias a ello permite tener la mente más clara al momento de programar y definir las tareas a seguir en el equipo.

                    </p>
                    <p className="AboutMe-p">
                        En el código, desarrollé las funcionalidades de gestión de usuarios y autenticación, abarcando la lógica del servidor, la interfaz
                        de usuario, y la persistencia de los datos. Actualmente estoy refactorizando el código en algunos componentes.
                        Porque por la presión de entregar a tiempo escribimos mucho código spaghetti, a los mejor sigue siendo spaghetti pero, menos.
                        Esto me ha permitido analizar y tener atención al detalle para tener un código limpio, escalable y modular.
                        Te comparto el link de mi cuenta de GitHub por si acaso deseas ver el código: <a href="https://github.com/blancojohn/Final-Project" target="_blank">Proyecto-Final</a>.
                        En el Front-End utilizamos flux y un contexto global para el flujo eficiente y ordenado de los datos en las funcionalidades de gestión de usuarios, carrito de compras y datos para mercado pago.
                        Estoy interesado en formar parte de un equipo de desarrollo real para aportar con mis habilidades y también seguir aprendiendo de los demás.
                    </p>

                    <div className="AboutMe-div-box-img-text">
                        {
                            aboutMeItems
                        }

                        <img
                            src={logo}
                            alt="logo"
                            width={40}
                            height={40}
                            className="AboutMe-img-logo"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutMe;