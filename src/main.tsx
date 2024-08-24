import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./config/theme.ts";
import AppContext from "./config/AppContext.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <AppContext>
      <RouterProvider router={router} />
        </AppContext>
    </ChakraProvider>
  </React.StrictMode>
);
