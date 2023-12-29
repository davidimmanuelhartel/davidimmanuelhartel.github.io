import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface NavbarProps {
  sectionRefs: any;
}

const Navbar = ({ sectionRefs }: NavbarProps) => {
  const [aboutRef, contactRef, projectsRef] = sectionRefs;
  const [scrollBgColor, setScrollBgColor] = useState(false);
  const hoverSettings = {
    backdropFilter: "blur(1px)",
    bg: "rgba(0,0,0,0)",
    textDecoration: "underline",
    transition: "color 1s ease-in-out",
    color: "black",
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const threshold = 100;
    if (scrollPosition > threshold) {
      setScrollBgColor(true);
    } else {
      setScrollBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      as="nav"
      boxShadow={scrollBgColor ? "none" : "none"}
      position="sticky"
      top="0"
      transition="background-color 0.3s"
      backdropFilter={scrollBgColor ? "blur(3px)" : "rgba(0,0,0,0.25)"}
      zIndex={1}
    >
      <Container py={{ base: "0", lg: "0" }}>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <HStack spacing="20">
            <ButtonGroup variant="ghost" spacing="8">
              <Link to="/" onClick={scrollToTop}>
                <Button
                  _hover={{
                    ...hoverSettings,
                    color: "red.700",
                  }}
                  fontSize={"xs"}
                >
                  DH
                </Button>
              </Link>
              <Link to="/about" onClick={() => scrollToSection(aboutRef)}>
                <Button
                  _hover={{
                    ...hoverSettings,
                    color: "yellow.700",
                  }}
                  fontSize={"xs"}
                >
                  ABOUT
                </Button>
              </Link>

              <Link to="/projects" onClick={() => scrollToSection(projectsRef)}>
                <Button
                  _hover={{
                    ...hoverSettings,
                    color: "green.700",
                  }}
                  fontSize={"xs"}
                >
                  PROJECTS
                </Button>
              </Link>
              <Link to="/contact" onClick={() => scrollToSection(contactRef)}>
                <Button
                  _hover={{
                    ...hoverSettings,
                    color: "teal.700",
                  }}
                  fontSize={"xs"}
                >
                  CONTACT
                </Button>
              </Link>
            </ButtonGroup>
          </HStack>
          <HStack spacing="4">
            <a href="https://www.linkedin.com/in/your-linkedin-profile">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/your-github-profile">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
