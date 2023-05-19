import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
function Boxcustom({ person }) {
  const [personO, setPersonO] = useState({ name: "", id: "" });
  return (
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
        {person}
      </Typography>
      <TextField
        label="Cedula"
        value={personO.id}
        onChange={(e) => setPersonO({ ...personO, id: e.target.value })}
        variant="standard"
        style={{ margin: "10px" }}
        color="success"
      />
      <h3 style={{ margin: "10px", color: "gray" }}>Nombre: {personO.name}</h3>
    </Box>
  );
}

function Facturacion() {
  let date = new Date();
  const [errorEntrada, setErrorEntrada] = useState(false);
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

  useEffect(() => {
    const getProduct = async () => {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/products/" + newProduct.id + "/",
      })
        .then(({ data }) => {
          const { name, price, manufacturer } = data;
          setNewProduct({
            ...newProduct,
            name: name,
            price: price,
            manufacturer: manufacturer,
            quantity: 1,
            total: price,
          });
          setErrorEntrada(false);
        })
        .catch((error) => {
          setErrorEntrada(true);
          setNewProduct({
            ...newProduct,
            name: "",
            price: 0,
            manufacturer: "",
            quantity: "",
            total: 0,
          });
        });
    };
    getProduct();
  }, [newProduct.id]);
  const columns = [
    "Nombre",
    "Precio unitario",
    "Fabricante",
    "Cantidad",
    "Subtotal",
  ];
  const addProduct = (e) => {
    e.preventDefault();
    if (newProduct.id !== "" && newProduct.quantity !== "") {
      setProducts([...products, newProduct]);
      setNewProduct({
        ...newProduct,
        id: "",
        name: "",
        price: 0,
        manufacturer: "",
        quantity: "",
        total: 0,
      });
    }
  };
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
          display: { md: "flex" },
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
        <Boxcustom person={"Vendedor"} />
        <Boxcustom person={"Cliente"} />
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
          size="small"
          label="Id Producto"
          type="number"
          error={errorEntrada}
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        {newProduct.id !== "" ? (
          <TextField
            label="Cantidad a vender"
            size="small"
            type="number"
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                quantity: e.target.value,
                total: parseInt(e.target.value) * parseInt(newProduct.price),
              })
            }
            value={newProduct.quantity}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        ) : (
          <TextField
            label="Cantidad a vender"
            size="small"
            type="number"
            value={newProduct.quantity}
            disabled
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
        <TextField
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
        <Button color="success" startIcon={<AddIcon />} onClick={addProduct}>
          Añadir
        </Button>
      </Box>

      <Paper sx={{ overflow: "auto", margin: "0px 4%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <caption style={{ textAlign: "end" }}>
              Total:{" "}
              {products.reduce((accumulator, object) => {
                return accumulator + object.total;
              }, 0)}
            </caption>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {Object.keys(newProduct)
                      .slice(1)
                      .map((key, index) => {
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
