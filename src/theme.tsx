import { createGlobalStyle, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    color: "#788B91",
    fontFamily: "Helvetica Neue, Arial",
}

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: ${props => props.theme.fontFamily};
        font-size: 62.5%;
    }

    body { font-size: 1.6em }
`;

export default theme;