import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {IncidentService, AuthService, ProfileService} from 'Services';
import logoImg from 'img/logo.png';
import 'layout/principal/styles/topo.css';

export default function Topo() {
    const [incidents, setIncidents] = useState([]);
    const ongId = AuthService.GetSessionData('ongId');
    const ongName = AuthService.GetSessionData('ongName');
    const history = useHistory();

    useEffect(() => {
        ProfileService.GetProfile()
        .then( res => setIncidents(res.data))
        .catch( err => console.log(err));
    }, [ongId]);

    async function handleDeleteIncident(id) {

        IncidentService.DeleteIncident(id)
        .then(res =>{
            setIncidents(incidents.filter(incident => incident.id !== id));
            alert('Cadastro deletado com sucesso');
        })
        .catch(err =>{
            alert('Erro ao deletar o caso. Tente novamente!');
            console.log(err)
        });
    }

    const handleLogout = () => AuthService.Logout().then(history.push('/'));

    return(
        <>
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light" style={{borderBottomStyle:"ridge"}}>
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={logoImg} width="100" height="30" alt="" />
            </a>
            </nav>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Cadastrar
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Cadastrar Caso</a>
                    <a class="dropdown-item" href="/hero/cadastrar">Cadastrar Pets</a>
                    <a class="dropdown-item" href="#">Cadastrar Usuário</a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Agendar castração</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Editar perfil</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <div class="input-group input-group-sm mb-3">
                    <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                    <button class="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
            </div>
        </nav></>
    );
}
