import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../../Services';
import petImg from '../../img/pets.jpg';
import logoImg from '../../img/logo.png';
import Rodape from './rodape';
import Topo from './topo';
import './styles/layout.css';
import routes from "routes.js";

export default function Template() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function irParaHome() {
        history.push('/home');
    }

    async function handleLogin(e){
        e.preventDefault();

        AuthService.Login({id})
        .then( res =>{
            history.push('/home');
            console.log(res);
        })
        .catch(err =>{
            alert('Falha no Login. Tente novamente')
            console.log(err);
        });
    }

    return (
        <section class="form my-4 mx-5">
            <Topo />
            <Rodape />
        </section>
    );
}