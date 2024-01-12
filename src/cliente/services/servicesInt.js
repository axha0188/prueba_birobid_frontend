import axios from "axios";

const URL_API = "https://localhost:7212/api";

export const listarCliente = async () => {
  const apiUrl = `${URL_API}/listarcliente`;
  const res = await axios.get(apiUrl);
  return res.data;
};

export const grabarCliente = async (datos) => {
  const apiUrl = `${URL_API}/grabarcliente`;
  const res = await axios.post(apiUrl, datos);
  return res.data;
};

export const editarCliente = async (datos) => {
  const apiUrl = `${URL_API}/editarcliente`;
  const res = await axios.post(apiUrl, datos);
  return res.data;
};

export const eliminarCliente = async (datos) => {
  const apiUrl = `${URL_API}/eliminarcliente`;
  const res = await axios.post(apiUrl, datos);
  return res.data;
};
