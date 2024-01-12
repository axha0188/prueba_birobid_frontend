import { useEffect, useState } from "react";
import * as servicios from "../services/servicesInt";

const useCliente = () => {
  const [listaCliente, setListaCliente] = useState([]);
  const [formulario, setFormulario] = useState({
    codigo: 0,
    nombre: "",
    cedula: "",
    telefono: "",
    celular: "",
    correo: "",
    genero: "M",
    fechaNacimiento: new Date(),
  });

  const limpiarFormulario = () => {
    setFormulario({
      codigo: 0,
      nombre: "",
      cedula: "",
      telefono: "",
      celular: "",
      correo: "",
      genero: "M",
      fechaNacimiento: new Date(),
    });
  };

  // cambiar el nombre
  const handleNombre = (e) =>
    setFormulario({ ...formulario, nombre: e.target.value });
  // cambiar el nombre
  const handleCedula = (e) =>
    setFormulario({ ...formulario, cedula: e.target.value }); // cambiar el nombre
  const handleTelefono = (e) =>
    setFormulario({ ...formulario, telefono: e.target.value }); // cambiar el nombre
  const handleCelular = (e) =>
    setFormulario({ ...formulario, celular: e.target.value }); // cambiar el nombre
  const handleCorreo = (e) =>
    setFormulario({ ...formulario, correo: e.target.value }); // cambiar el nombre
  const handleGenero = (e) =>
    setFormulario({ ...formulario, genero: e.target.value }); // cambiar el nombre
  const handleFechaNacimiento = (e) =>
    setFormulario({ ...formulario, fechaNacimiento: e.target.value }); // cambiar el nombre

  const grabar = async (e) => {
    e.preventDefault();
    console.log(formulario);
    if (formulario.codigo === 0) {
      const res = await servicios.grabarCliente(formulario);
      console.log(res);
      if (res.status === 200) {
        alert("El Cliente se grabo correctamente");
        limpiarFormulario();
        listarClientesApi();
        return;
      }
      alert("Error al grabar el cliente");
      return;
    }
    const res = await servicios.editarCliente(formulario);
    console.log(res);
    if (res.status === 200) {
      alert("El Cliente se edito correctamente");
      limpiarFormulario();
      listarClientesApi();
      return;
    }
    alert("Error al editar el cliente");
  };

  const eliminarCliente = async () => {
    const res = await servicios.eliminarCliente(formulario);
    console.log(res);
    if (res.status === 200) {
      alert("El Cliente se elimino correctamente");
      limpiarFormulario();
      listarClientesApi();
      return;
    }
    alert("Error al eliminar el cliente");
  };

  const obtenerCliente = (e) => {
    console.log(e);
    const datoSeleccionado = e.row;
    setFormulario({
      ...datoSeleccionado,
      fechaNacimiento: String(datoSeleccionado.fechaNacimiento).slice(0, 10),
    });
  };

  // cambia la lista los clientes
  const listarClientesApi = () => {
    servicios.listarCliente().then((res) => {
      setListaCliente(res);
    });
  };

  // se ejecuta apenas cargue la pagina
  useEffect(() => listarClientesApi(), []);

  return {
    listaCliente,
    formulario,
    listarClientesApi,
    handleNombre,
    handleCedula,
    handleTelefono,
    handleCorreo,
    handleGenero,
    handleFechaNacimiento,
    handleCelular,
    grabar,
    obtenerCliente,
    eliminarCliente,
  };
};

export default useCliente;
