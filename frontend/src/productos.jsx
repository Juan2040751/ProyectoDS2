import {
  Box,
  Button,
  Card,
  CardHeader,
  Fade,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";

function NuevoProducto({ open, handleOpen }) {
  const [producto, setProducto] = useState({
    name: "",
    description: "",
    price: 0,
    manufacturer: "",
    weight: "",
    category: "",
    numberUnits: "",
  });
  return (
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
                onClick={handleOpen}
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
                id="standard-search"
                label="Nombre del Producto"
                type="text"
                variant="standard"
                value={producto.name}
              />
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Precio del Producto
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={producto.price}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>

              <TextField
                id="standard-search"
                label="Fabricante del Producto"
                type="text"
                value={producto.manufacturer}
                variant="standard"
              />

              <TextField
                id="standard-search"
                label="Descripción del Producto"
                type="text"
                value={producto.description}
                variant="standard"
              />

              <FormControl variant="standard">
                <InputLabel id="standard-weight-helper-text">
                  Peso del Producto
                </InputLabel>
                <Input
                  id="standard-adornment-weight"
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
                id="standard-search"
                label="Categoria del Producto"
                type="text"
                value={producto.category}
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Unidades del Producto"
                type="number"
                value={producto.numberUnits}
                variant="standard"
              />
            </div>
          </Card>
        </Box>
      </Fade>
    </Modal>
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
            href="#"
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
