import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { AuthService } from '../../Services';
import './styles.css';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        AuthService.Login({id})
        .then( res =>{
            history.push('/profile');
            console.log(res);
        })
        .catch(err =>{
            alert('Falha no Login. Tente novamente')
            console.log(err);
        });
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}