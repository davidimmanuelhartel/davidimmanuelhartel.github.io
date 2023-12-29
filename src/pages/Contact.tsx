import { Box, Heading, Flex, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStrava,
  faSoundcloud,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const iconSize = "2x"; // Adjust the size if needed
  const iconMargin = "20px"; // Adjust the margin for spacing

  return (
    <Center h="100vh">
      <Box p="20" maxW="1000px">
        <Heading mb={"10"}>Contact</Heading>
        <Flex width="100%" flexDir={"row"} justifyContent={"center"}>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            style={{ marginRight: iconMargin }}
          >
            <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          </a>
          <a
            href="https://github.com/your-github-profile"
            style={{ marginRight: iconMargin }}
          >
            <FontAwesomeIcon icon={faGithub} size={iconSize} />
          </a>
          <a
            href="https://www.strava.com/athletes/your-strava-profile"
            style={{ marginRight: iconMargin }}
          >
            <FontAwesomeIcon icon={faStrava} size={iconSize} />
          </a>
          <a
            href="https://soundcloud.com/your-soundcloud-profile"
            style={{ marginRight: iconMargin }}
          >
            <FontAwesomeIcon icon={faSoundcloud} size={iconSize} />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile">
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
        </Flex>
      </Box>
    </Center>
  );
};

export default Contact;
