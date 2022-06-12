import Navbar from "./components/hero/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Menu from "./components/Menu.js";
import Skill from "./components/skills/Skill";
import Project from "./components/projects/Project";
import Review from "./components/reviews/Review";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
    <Hero >
     
    <Navbar/>
    </Hero>
    <About menu={<Menu/>}/>
    <Skill/>
    <Project/>
    <Review menu={<Menu/>}/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
