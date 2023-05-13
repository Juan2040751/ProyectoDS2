import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Facturacion() {
  let date = new Date();
  const [seller, setSeller] = useState({ name: "", id: "" });
  const [client, setClient] = useState({ name: "", id: "" });
  return (
    <Box
      sx={{
        flexGrow: 2,
        display: { xs: "block", md: "block" },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: "space-between",
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingUp: "3%",
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 25,
            color: "black",
            textDecoration: "none",
          }}
        >
          Crear Factura
        </Typography>
        <h4>
          Fecha:
          {" " +
            date.getDate() +
            "/" +
            date.getMonth() +
            "/" +
            date.getFullYear()}
        </h4>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: "space-between",
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "block", md: "block" },
            justifyContent: "space-between",
            backgroundColor: "#D7DBDD",
            marginLeft: "1%",
            marginRight: "1%",
            borderRadius: 4,
            padding: "1%",
          }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "gray",
              textDecoration: "none",
            }}
          >
            Vendedor
          </Typography>
          <TextField
            id="standard-basic"
            label="Cedula"
            value={seller.id}
            onChange={(e) => setSeller({ ...seller, id: e.target.value })}
            variant="standard"
            style={{ margin: "10px" }}
            color="success"
          />
          <h3 style={{ margin: "10px", color: "gray" }}>
            Nombre: {seller.name}
          </h3>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "block", md: "block" },
            justifyContent: "space-between",
            backgroundColor: "#D7DBDD",
            marginLeft: "1%",
            marginRight: "1%",
            borderRadius: 4,
            padding: "1%",
          }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "gray",
              textDecoration: "none",
            }}
          >
            Cliente
          </Typography>
          <TextField
            id="standard-basic"
            label="Cedula"
            value={client.id}
            onChange={(e) => setClient({ ...client, id: e.target.value })}
            variant="standard"
            style={{ margin: "10px" }}
            color="success"
          />
          <h3 style={{ margin: "10px", color: "gray" }}>
            Nombre: {client.name}
          </h3>
        </Box>
      </Box>
    </Box>
  );
}

export default Facturacion;
