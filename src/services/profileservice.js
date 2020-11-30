import api from "./api";

export async function Create({ nome, email, senha }) {
  const user = process.env.REACT_APP_SYS_BACK_USER;
  const pass = process.env.REACT_APP_SYS_BACK_PW;
  let response = { data: { status: false, erros: [] } };

  if (!user || !pass) {
    response.data.erros = ["Sistema não pode acessar o ambiente externo."];
    return response;
  }

  try {
    const sysLogin = await api.post("/login", { email: user, senha: pass });

    if (sysLogin.data.status !== true) {
      response.data.erros = ["Sistema não pode se validar corretamente."];
      return response;
    }

    const token = sysLogin.data.data.token;
    const res = await api.post(
      "/user",
      { nome, email, senha },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return res;
  } catch (err) {
    console.log(err.response);
    response.data.erros = err.response.data.erros;
    response.data.erros.push([
      `${err.response.status}(${err.response.statusText}) Erro na comunicação do sistema.`,
    ]);
    return response;
  }
}
