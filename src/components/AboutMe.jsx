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

const aboutMeItems= dataAboutMeItems.map(({ label, number }, key) => (
    <div key={key}>
        <div className="AboutMe-div-items">
            <span className="AboutMe-span-number">{number}</span>
            <span className="AboutMe-span-symbol">+</span>
        </div>
        <p className="AboutMe-items-p">{label}</p>
    </div>
));

const AboutMe= () => {
    return (
        <section
            id="sobre-mi"
            className="AboutMe-section"
        >
            <div className="AboutMe-div-container">

                <div className="AboutMe-div-box">

                    <p className="AboutMe-p">
                        Bienvenido, soy John Blanco, con el tiempo me terminan diciendo John White, profesional de Marketing de Ventas B2B. 
                        Conocí el Desarrollo de Sofware hace dos años por la curiosidad que me generó la insistente publicidad de diplomados 
                        en redes sociales. Me certifiqué en el Boot Camp 4Geeks Academy como desarrollador Full Stack en el 2024. 
                        Me gusta crear experiencias web intutivas para los usuarios.       
                    </p>
                    <p className="AboutMe-p">
                        Entre mis habilidades, destaco que durante el desarrollo del Boot Camp, lideré a mi equipo en las metodologías 
                        del desarrollo ágil para construir nuestro proyecto final. Me gusta crear las historias de usuarios, tener un plan 
                        de trabajo y creo en la importancia de este proceso porque permite estar con la mente ordenada al momento de programar
                        y avanzar. Además, me gusta crear bases de datos, APIS y sobre todo tener un front-end en el que los usuarios se les 
                        haga fácil navegar.
                    </p>
                    <p className="AboutMe-p">
                        Cuento con experiencia profesional desarrollando aplicaciones webs, junto a mi 
                        equipo de estudio, desarrollamos un MVP que consiste en una tienda de Ecommerce. Finalmente, 
                        puedo ver mis pasiones por el Marketing y ahora por la programación mezcladas.
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