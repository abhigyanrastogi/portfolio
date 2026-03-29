import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <>
      <HeroSection />
      <NavBar />
      <ProjectsSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
