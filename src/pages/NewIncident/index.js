import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import {IncidentService} from '../../Services';
import './styles.css';

export default function NewIncident() {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        
        const data = {title, description, value};

        IncidentService.InsertIncident(data)
        .then( res =>{
            history.push('/profile');
            alert('Caso cadastrado com sucesso')
            console.log(res);
        })
        .catch( err =>{
            alert('Erro ao cadastrar caso. Tente novamente');
            console.log(err);
        });
    }
    
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                       Voltar para a página inicial
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}