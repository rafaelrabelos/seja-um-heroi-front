import api from './api';

export async function Create({nome, email, senha}) {
    const res = await api.post('/user',{ nome, email, senha });

    return res;
}