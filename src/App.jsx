import Header from "./components/Header";
import Person from "./components/Person";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

/* import Prueba from "./components/Prueba"; */

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Person />
        <Project />
        <Contact /> 
      </main>
      <Footer />
      {/* <Prueba /> */}
    </>
  )

}

export default App;
