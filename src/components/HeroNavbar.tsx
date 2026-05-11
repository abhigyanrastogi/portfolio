import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import NavBar from "./NavBar";

const HeroNavbar = () => {
  const { scrollY } = useScroll();

  const scrollUpperLimit = window.innerHeight * 0.6; // Adjust this value to control when the animation starts

  const heroOpacity = useTransform(scrollY, [0, scrollUpperLimit], [1, 0]);
  const heroY = useTransform(scrollY, [0, scrollUpperLimit], [0, 150]);

  const navOpacity = useTransform(scrollY, [0, scrollUpperLimit], [0, 1]);
  const navY = useTransform(scrollY, [0, scrollUpperLimit], [-50, 0]);

  return (
    <>
      <motion.div
        style={{
          opacity: navOpacity,
          y: navY,
          pointerEvents: "auto",
          zIndex: 1000,
        }}
        className="position-fixed w-100 bg-surface"
      >
        <NavBar />
      </motion.div>
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
        className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      >
        <Hero />
      </motion.div>
    </>
  );
};

export default HeroNavbar;
