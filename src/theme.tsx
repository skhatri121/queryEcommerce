import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
} from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      header: "#000000",
      htext: "#ffffff",
      mainbg: "#808080",
      price: "#FFE104",
    },
  },
  // withDefaultColorScheme: {
  //   colorScheme: "teal",
  //   components: ["Button"],
  // },
  // withDefaultSize: {
  //   size: "lg",
  //   components: ["Heading", "Text"],
  // },
  // withDefaultVariant: {
  //   variant: "outline",
  //   components: ["Button"],
  // },
  // withDefaultProps: {
  //   defaultProps: {
  //     variant: "outline",
  //     size: "sm",
  //   },
  //   components: ["Button"],
  // },
});

export default theme;
