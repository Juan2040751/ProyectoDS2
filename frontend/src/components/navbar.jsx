import AdbIcon from "@mui/icons-material/Adb";
import { Box, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom"; // Importar el componente Link de React Router
import React from "react";

function NavbarApp({ window }) {
  const pages = [
    { name: "Productos", path: "/productos" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "left",
                marginLeft: "2%",
              }}
            >
              <AdbIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  fontSize: 40,
                }}
              />
              <Typography
                variant="h4"
                noWrap
                component={Link} // Utilizar el componente Link para el logotipo
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link} // Utilizar el componente Link para los botones de navegación
                  to={page.path}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: 18,
                    fontWeight: "medium",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;

