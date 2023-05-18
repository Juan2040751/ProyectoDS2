import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Card,
  Fade,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import React, { useState } from "react";

export function NuevoProducto({ open, handleOpen }) {
  const [producto, setProducto] = useState({
    name: "",
    description: "",
    price: 0,
    manufacturer: "",
    weight: "",
    category: "",
    numberUnits: "",
  });
  const [message, setMessage] = useState({
    state: false,
    message: "producto añadido con exito!",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/products/",
      data: producto,
    })
      .then(async function (responseUser) {
        setMessage({ ...message, state: true });
      })
      .catch(function (error) {
        setMessage({ state: true, message: "error!" });
      });

    setProducto({
      name: "",
      description: "",
      price: 0,
      manufacturer: "",
      weight: "",
      category: "",
      numberUnits: "",
    });
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              minWidth: 400,
              maxWidth: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "transparent",
            }}
          >
            <Card
              sx={{
                padding: 4,
                width: "100%",
                borderRadius: 4,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex" },
                  justifyContent: "space-between",
                  paddingRight: "3%",
                }}
              >
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    mr: 0,
                    display: { xs: "flex", md: "flex" },
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    fontSize: 25,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Nuevo Producto
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#00AB55",
                    borderRadius: 7,
                    textTransform: "initial",
                  }}
                  onClick={submitHandler}
                >
                  <AddIcon sx={{ mr: 0.5 }} />
                  Crear
                </Button>
              </Box>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 30,
                }}
              >
                <TextField
                  label="Nombre del Producto"
                  type="text"
                  variant="standard"
                  onChange={(e) =>
                    setProducto({ ...producto, name: e.target.value })
                  }
                  value={producto.name}
                />
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Precio del Producto
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    onChange={(e) =>
                      setProducto({ ...producto, price: e.target.value })
                    }
                    value={producto.price}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>

                <TextField
                  label="Fabricante del Producto"
                  type="text"
                  onChange={(e) =>
                    setProducto({ ...producto, manufacturer: e.target.value })
                  }
                  value={producto.manufacturer}
                  variant="standard"
                />

                <TextField
                  label="Descripción del Producto"
                  type="text"
                  onChange={(e) =>
                    setProducto({ ...producto, description: e.target.value })
                  }
                  value={producto.description}
                  variant="standard"
                />

                <FormControl variant="standard">
                  <InputLabel id="standard-weight-helper-text" htmlFor="weight">
                    Peso del Producto
                  </InputLabel>
                  <Input
                    id="standard-adornment-weight"
                    name="weight"
                    onChange={(e) =>
                      setProducto({ ...producto, weight: e.target.value })
                    }
                    value={producto.weight}
                    endAdornment={
                      <InputAdornment position="end">Kg</InputAdornment>
                    }
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
                <TextField
                  label="Categoria del Producto"
                  type="text"
                  onChange={(e) =>
                    setProducto({ ...producto, category: e.target.value })
                  }
                  value={producto.category}
                  variant="standard"
                />
                <TextField
                  label="Unidades del Producto"
                  type="number"
                  onChange={(e) =>
                    setProducto({ ...producto, numberUnits: e.target.value })
                  }
                  value={producto.numberUnits}
                  variant="standard"
                />
              </div>
            </Card>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        role="snackbar"
        id="snackbar"
        open={message.state}
        onClose={() => setMessage({ ...message, state: false })}
        message={message.message}
      />
    </>
  );
}

export default function Productos() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          flexGrow: 2,
          display: { md: "block" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            justifyContent: "space-between",
            padding: "3%",
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
            Lista de Productos
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00AB55",
              borderRadius: 7,
              textTransform: "initial",
            }}
            onClick={handleOpen}
          >
            <AddIcon sx={{ mr: 0.5 }} />
            Agregar Producto
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "block" },
        }}
      ></Box>
      <NuevoProducto open={open} handleOpen={handleOpen} />
    </div>
  );
}
