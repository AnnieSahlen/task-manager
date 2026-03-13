import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f8",
    },
    primary: {
      main: "#2a2a2a",
      light: "#4a4a4a",
      contrastText: "#ffffff",
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: "Inter, system-ui, sans-serif",

    h1: {
      fontWeight: 600,
      letterSpacing: "-0.5px",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
  },
});

export default theme;
