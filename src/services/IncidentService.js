import api from './api';
import {GetSessionData} from './AuthService';

export async function InsertIncident({data}) {

    const response = await api.post('incidents', data, {
        headers: { 
            Authorization: GetSessionData('ongId'),
        }
    });

    return response;
}

export async function DeleteIncident({id}) {

    const response = await api.delete(`incidents/${id}`, {
        headers:{
            Authorization: GetSessionData('ongId'),
        }
    });

    return response;
}