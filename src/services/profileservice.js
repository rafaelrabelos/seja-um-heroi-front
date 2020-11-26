import api from './api';

export async function Create({nome, email, senha}) {
    const res = await api.post('/user/create',{ nome, email, senha });

    return res;
}