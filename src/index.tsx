import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import App from "./App";
import theme, { GlobalStyles } from "./theme";

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Normalize />
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
}