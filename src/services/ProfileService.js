import api from './api';
import {GetSessionData} from './AuthService';

export async function GetProfile({data}) {

    const response = await api.get('profile', {
        headers: { 
            Authorization: GetSessionData('ongId'),
        }
    });

    return response;
}
