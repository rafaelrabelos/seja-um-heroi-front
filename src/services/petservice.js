import api from "./api";

export async function ObtemPetClasses() {
  let response = { data: { status: false, erros: [] } };

  const token = sessionStorage.getItem("token");

  try {
    const res = await api.get("/pet-classe", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (err) {
    console.log(err.response);
    response.data.erros = err.response.data.erros;
    response.data.erros.push([
      `${err.response.status}(${err.response.statusText}) Erro na comunicação do sistema.`,
    ]);
    return response;
  }
}
