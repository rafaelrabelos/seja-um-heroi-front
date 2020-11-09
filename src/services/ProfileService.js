import api from './api';
import jwt_decode from "jwt-decode";


export async function Create({nome, email, senha}) {
    
    const res = await api.post('/cadastro',{ nome, email, senha });

    if(res.data.status != false){
        SessionInit(res.data.data);
    }

    return res;
}

export function GetSessionData({itemNane}){
    localStorage.getItem(itemNane);
}


function SessionInit(data) {

    sessionStorage.setItem("nome", data.user.nome);
    sessionStorage.setItem("email", data.user.email);
    sessionStorage.setItem("token", data.token);
}

export function IsValideSession(){
    var token = sessionStorage.getItem("token");

    if(sessionStorage.getItem("token") !== null){
        var decoded = jwt_decode(token);
        console.log(decoded)
        SessionInit({
            user:{
                nome: decoded.user.nome,
                email: decoded.user.email
            },
            token: token
        })
        return true;
    }
    
    return false;
}