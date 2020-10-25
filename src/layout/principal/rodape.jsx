import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../img/logo.png';
import {IncidentService, AuthService, ProfileService} from '../../Services';
import './styles/rodape.css';

export default function Rodape() {
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
        <footer class="footer-distributed">
            <hr />
			<div class="footer-left">
				<span><img src={logoImg} width="100" height="30" alt="" /></span>
				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					<a href="#">Blog</a>
					<a href="#">Cases</a>
					<a href="#">Números</a>
					<a href="#">Contribuir</a>
					<a href="#">Sobre-nos</a>
					<a href="#">Contato</a>
				</p>
				<p class="footer-company-name">seja um herói © 2020 Todos os direitos reservados</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contato@sejaumheroi.com.br</a></p>
				</div>
			</div>

			<div class="footer-right">
				<p class="footer-company-about">
					<span>Sobre</span>
					Seja um herói! Adote um pet e seja o herói dele. Ele vai ser seu fâ para sempre.<br />
					Buscamos facilitar o trabalho dos heróis.
				</p>
				<div class="footer-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
				</div>
			</div>
		</footer>
        <hr />
        </>
    );
}

