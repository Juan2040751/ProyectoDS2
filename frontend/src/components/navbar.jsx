import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom"; // Importar el componente Link de React Router
import React from "react";
import { NavLink } from "react-router-dom";
function NavbarApp({ window }) {
  const pages = ["Facturacion", "Productos"];


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
              <ReceiptIcon
                sx={{
                  display: { xs: "none", md: "flex", color: "#00AB55" },
                  mr: 1,
                  fontSize: 40,
                }}
              />
              <Typography
                variant="h4"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Turbo
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
                  key={page}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: 18,
                    fontWeight: "medium",
                  }}
                >
                  {page}
                </NavLink>
              ))}
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;

