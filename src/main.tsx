import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";
import { ColorModeScript } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
const queryClient = new QueryClient();
console.log(theme.config.initialColorMode);
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
