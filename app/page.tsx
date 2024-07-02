"use client";

import {
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CoinTable from "./components/CoinTable";
import MainTitle from "./components/MainTitle";
import FooterCredit from "./components/FooterCredit";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

darkTheme.typography.h1 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
};

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Stack
          spacing={2}
          justifyContent="center"
          sx={{
            height: "100vh",
            marginInline: "auto",
            marginBlock: "50px",
          }}
        >
          <MainTitle />
          <CoinTable />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
