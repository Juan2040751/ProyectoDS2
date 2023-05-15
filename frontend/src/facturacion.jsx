import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
function Facturacion() {
  let date = new Date();
  const [seller, setSeller] = useState({ name: "", id: "" });
  const [client, setClient] = useState({ name: "", id: "" });
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: 0,
    manufacturer: "",
    quantity: "",
    total: 0,
  });
  const [products, setProducts] = useState([
    {
      id: 12,
      name: "Leche",
      price: 5000,
      manufacturer: "Alpina",
      quantity: 3,
      total: 15000,
    },
  ]);
  const columns = ["Nombre", "Precio", "Fabricante", "Cantidad", "Total"];
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
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: "space-between",
          padding: "4%",
          flexWrap: "wrap",
          gap: "1%",
        }}
      >
        <TextField
          id="standard-number"
          size="small"
          label="ID Producto"
          type="number"
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        {newProduct.id !== "" ? (
          <TextField
            id="standard-number"
            label="Cantidad a vender"
            size="small"
            type="number"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        ) : (
          <TextField
            id="standard-number"
            label="Cantidad a vender"
            size="small"
            type="number"
            value={newProduct.quantity}
            disabled
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
        <TextField
          id="standard-number"
          label="Nombre del Producto"
          type="text"
          size="small"
          value={newProduct.name}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="standard-number"
          label="Precio Unitario"
          size="small"
          type="number"
          value={newProduct.price}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="standard-number"
          label="Precio Total"
          size="small"
          type="number"
          value={newProduct.total}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button color="success" startIcon={<AddIcon />}>
          Añadir
        </Button>
      </Box>

      <Paper sx={{ overflow: "auto", margin: "0px 4%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} align={"center"}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {Object.keys(newProduct).slice(1).map((key) => {
                      const value = row[key];
                      return (
                        <TableCell key={index} align={"center"}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default Facturacion;
