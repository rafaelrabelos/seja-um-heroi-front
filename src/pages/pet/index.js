import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Register() {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [vacina, setVacina] = useState('');
    const [informacoes, setInformacoes] = useState('');
    const [foto, setFoto] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            raca,
            tamanho,
            vacina,
            informacoes,
            foto
        };

        try {
            const response = await api.post('pets', data);

            alert(`Pet ${response.data.nome} cadastrado com sucesso`);

            history.push('/hero/index');
        } catch (err) {
            alert('Erro no cadastro. Tente novamente.');
        }

    }

    async function showErrors(erros){
        let errors = [];

        if(erros.data && Array.isArray(erros.data.erros)){
            errors = erros.data.erros;
        }else{
            errors = [`${erros.status} ${erros.statusText} `];
        }

        this.setState({cadastrarErro: true, cadastrarErroMsg: errors.map(x => <p>{x}</p>) });
    }

    return (
        <>
        <div class="container">
            <div class="card" style={{margin: "2% 20%"}}>
                <form class="card-body">
                    <div class="form-group">
                        <label for="animalName">Nome do animal</label>
                        <input type="text" class="form-control" id="animalName" value={nome} onChange={e => setNome(e.target.value)} aria-describedby="emailHelp"/>
                    </div>
                    <div class="form-group">
                        <label for="animalRace">Raça</label>
                        <input type="password" class="form-control" id="animalRace" value={raca} onChange={e => setRaca(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="animalSize">Tamanho</label>
                        <input type="password" class="form-control" id="animalSize" value={tamanho} onChange={e => setTamanho(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="animalRace">Vacinas em dia: </label>
                        <select class="form-control col-md-2" value={vacina} onChange={e => setVacina(e.target.value)}>
                            <option selected value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Informações adicionais</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={informacoes} onChange={e => setInformacoes(e.target.value)}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="animalPicture">Foto</label>
                        <input type="file" class="form-control-file" id="animalPicture" value={foto} onChange={e => setFoto(e.target.value)}/>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-danger" onClick={() => handleRegister()}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    
    );
}