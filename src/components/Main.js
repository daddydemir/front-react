import { NavBar }  from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Prods } from "../pages/prods/Prods";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";


function Main(){
    return (
        <section>
            <NavBar />
            <Banner />
            <Skills />
            <Prods />
            <Projects />
            <Contact />
            <Footer />
        </section>
    )
}


export default Main;