import api from './api';

export async function Login({id}) {

    const response = await api.post('sessions', { id });
    SessionInit(id, response.data.name);

    return response;
}

export async function Logout() {
    SessionFinish();
}

export function GetSessionData({itemNane}){
    localStorage.getItem(itemNane);
}


function SessionInit({id, name}) {
    localStorage.setItem('ongId', id);
    localStorage.setItem('ongName', name);
}

function SessionFinish({id, name}) {
    localStorage.clear();
}