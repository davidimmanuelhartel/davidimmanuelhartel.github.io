import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#f5f5f5", // Background color
      500: "#333", // Text color
    },
    home: "#fff",
    stuff: "#f9f9f9",
    contact: "#fcfcfc",
  },
});

export default theme;
