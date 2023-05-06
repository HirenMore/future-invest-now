import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#4b3b76",
    },
    secondary: {
      main: "#766939",
    },
    error: {
      main: "#b30000",
    },
    warning: {
      main: "#FF8400",
    },
    info: {
      main: "#9384D1",
    },
    success: {
      main: "#A0D8B3",
    },
  },
};

export const theme = createTheme(themeOptions);
