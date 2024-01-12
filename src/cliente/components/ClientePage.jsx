import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useCliente from "../hooks/useCliente";

const columns = [
  { field: "nombre", headerName: "Nombre", width: 400 },
  { field: "cedula", headerName: "Cedula", width: 150 },
  { field: "telefono", headerName: "Telefono", width: 150 },
  { field: "celular", headerName: "celular", width: 150 },
  { field: "correo", headerName: "Correo", width: 150 },
  { field: "genero", headerName: "Genero", width: 150 },
  { field: "fechaNacimiento", headerName: "Fecha Nacimiento", width: 150 },
];

function ClientePage() {
  const {
    listaCliente,
    formulario,
    listarClientesApi,
    handleNombre,
    handleCedula,
    handleTelefono,
    handleCorreo,
    handleGenero,
    handleFechaNacimiento,
    grabar,
    handleCelular,
  } = useCliente();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3">Clientes</Typography>
        </Grid>

        <Grid item container md={4} sm={4} xs={12} spacing={1}>
          <form onSubmit={grabar}>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  value={formulario.nombre}
                  onChange={handleNombre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Cedula"
                  value={formulario.cedula}
                  onChange={handleCedula}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Telefono"
                  value={formulario.telefono}
                  onChange={handleTelefono}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Celular"
                  value={formulario.celular}
                  onChange={handleCelular}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  label="Correo"
                  value={formulario.correo}
                  onChange={handleCorreo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Genero"
                  value={formulario.genero}
                  onChange={handleGenero}
                >
                  <MenuItem value="M">MASCULINO</MenuItem>
                  <MenuItem value="F">FEMENINO</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="date"
                  required
                  fullWidth
                  label="Fecha "
                  value={formulario.fechaNacimiento}
                  onChange={handleFechaNacimiento}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth type="submit">
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Box sx={{ height: "50vh", width: "100%" }}>
            <DataGrid
              columns={columns}
              rows={listaCliente}
              getRowId={(e) => e.codigo}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ClientePage;
