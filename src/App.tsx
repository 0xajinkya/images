import { useState } from "react";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages";
import { theme } from "./theme";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Box
          sx={{
            px: ["20px", "80px"],
            pt: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
