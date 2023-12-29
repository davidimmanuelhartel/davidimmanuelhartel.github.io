import { Box, Heading, Flex } from "@chakra-ui/react";
import TxtRotate from "../components/effects/TxtRotate";
import { Canvas } from "@react-three/fiber";
import Frame from "../components/effects/Frame";

const Home = () => {
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box p="10" mx="auto" maxW="600px" flexDir={"column"}>
        <Canvas
          orthographic
          camera={{ zoom: 200 }}
          style={{ width: "800px", height: "800px" }}
        >
          <color attach="background" args={["rgba(255, 255, 255, 0.0)"]} />
          <Frame />
        </Canvas>
        <TxtRotate />
        <Heading
          textAlign={"center"}
          position={"absolute"}
          top={"40vh"}
          zIndex={1}
          className="txt-rotate"
          data-rotate='["Hallo!", "Hej!", "Moin!", "Tjena!", "Goddag!", "Привет!", "Salve!"]'
          data-period="4000"
          data-tempo="300"
        ></Heading>
      </Box>
    </Flex>
  );
};

export default Home;
