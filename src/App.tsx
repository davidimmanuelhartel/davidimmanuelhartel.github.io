import { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const cvRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  const sectionRefs = [aboutRef, contactRef, cvRef, projectsRef];
  // Handle scroll event and update the active section
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = 30;
    const homePosition = (homeRef.current?.offsetTop || 0) - offset;
    const aboutPosition = (aboutRef.current?.offsetTop || 0) - offset;
    const contactPosition = (contactRef.current?.offsetTop || 0) - offset;
    const projectsPosition = (projectsRef.current?.offsetTop || 0) - offset;
    const cvPosition = (cvRef.current?.offsetTop || 0) - offset;
    console.log(scrollPosition, homePosition, aboutPosition, contactPosition);
    if (scrollPosition >= contactPosition) {
      setActiveSection("contact");
    } else if (scrollPosition >= projectsPosition) {
      setActiveSection("projects");
    } else if (scrollPosition >= cvPosition) {
      setActiveSection("cv");
    } else if (scrollPosition >= aboutPosition) {
      setActiveSection("about");
    } else if (scrollPosition >= homePosition) {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add and remove the scroll event listener

  // Define background colors for each section
  const getBackgroundColor = (section: string): string => {
    switch (section) {
      case "contact":
        return activeSection === "contact" ? "#fefefe" : "transparent";
      case "projects":
        return activeSection === "projects" ? "#dddddd" : "transparent";
      case "about":
        return activeSection === "about" ? "#52796f" : "transparent";
      case "home":
        return activeSection === "home" ? "#fefefe" : "transparent";
      default:
        return "transparent";
    }
  };

  useEffect(() => {
    // Update the background color when activeSection changes
    document.body.style.backgroundColor = getBackgroundColor(activeSection);
    console.log(activeSection);
  }, [activeSection]);

  return (
    <BrowserRouter>
      <Box
        transition="background-color 0.5s ease"
        bg={getBackgroundColor("home")}
        minH="500vh"
      >
        <Navbar sectionRefs={sectionRefs} />
        <div className="home" ref={homeRef}>
          <Home />
        </div>
        <div className="about" ref={aboutRef}>
          <About />
        </div>
        <div className="blog" ref={projectsRef}>
          <Projects />
        </div>
        <div className="contact" ref={contactRef}>
          <Contact />
        </div>
      </Box>
    </BrowserRouter>
  );
}

export default App;
