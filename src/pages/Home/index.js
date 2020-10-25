import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import {IncidentService, AuthService, ProfileService} from 'Services';
import './styles.css';

export default function Home() {
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
        <div class="container form-inline">
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src={"/img/bulldog.jpg"} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Bulldog</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src="img/corgi.jpg" class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Corgi</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src="img/salsicha.jpg" class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Salsicha</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src="img/shitsu.jpg" class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Shitsu</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src="img/pug.jpg" class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Pug</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img src="img/lulu.jpg" class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Lulu</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="#" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
        </div>
        </>
    );
}