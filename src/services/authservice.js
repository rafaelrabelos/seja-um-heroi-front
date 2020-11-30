import api from "./api";
import jwt_decode from "jwt-decode";

export async function Login({ email, senha }) {
  const res = await api.post("/login", { email, senha });

  if (res.data.status !== false) {
    sessionStorage.setItem("token", res.data.data.token);
    IsValideSession();
  }

  return res;
}

export async function Logout() {
  SessionFinish();
}

export function GetSessionData({ itemNane }) {
  localStorage.getItem(itemNane);
}

function SessionInit(data) {
  sessionStorage.setItem("nome", data.user.nome);
  sessionStorage.setItem("email", data.user.email);
  sessionStorage.setItem("usertype", data.user.type);
  sessionStorage.setItem("token", data.token);
}

function SessionFinish() {
  sessionStorage.clear();
}

export function IsValideSession() {
  var token = sessionStorage.getItem("token");

  if (sessionStorage.getItem("token") !== null) {
    var decoded = jwt_decode(token);

    if (!decoded) {
      return false;
    }

    SessionInit({
      user: {
        nome: decoded.user.nome,
        email: decoded.user.email,
        type: decoded.type,
      },
      token: token,
    });
    return true;
  }

  return false;
}
