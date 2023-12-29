import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      bg="none"
      _hover={{ bg: "none" }}
      _active={{ bg: "none" }}
      _focus={{ boxShadow: "none" }}
    />
  );
};

export default ColorModeSwitch;
