import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../Services/api';
import './styles.css';

import logoImg from '../../img/logo.png';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repeteSenha, setRepeteSenha] = useState('');

    const history = useHistory(); //navegação através de uma função javascript, quando não se pode colocar o link do ReactRouter Dom

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            senha,
            repeteSenha,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro. Tente novamente.');
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e torne-se um herói, adotanto um pet e tirando ele das ruas.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <hr />
                    <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <input type="password" placeholder="Repetir Senha" value={repeteSenha} onChange={e => setRepeteSenha(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}