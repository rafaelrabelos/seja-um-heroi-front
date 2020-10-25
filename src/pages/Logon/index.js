import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../../Services';
import petImg from '../../img/pets.jpg';
import logoImg from '../../img/logo.png';
import './styles.css';

export default function Logon() {
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
        <div class="container main-container">
            <div class="row no-gutters">
                <div class="col-lg-6 col-md-6">
                    <div class="col-lg-12 col-md-10">
                        <img src={petImg} class="img-fluid" />
                    </div>
                    <div class="col-lg-12 col-md-8">
                        <p class="centertext descriptiontext">
                            &#128073; Diariamente centenas de animais são abondonados por seus donos. Acesse nossa plataforma e nos ajude a mudar esta realidade,
                             adotando um amiguinho e sendo o herói.
                             <br />
                        </p>
                        <p>
                            <ul style={{margin: "30px", fontsize: "large"}}>
                                <li>Já são mais de &#128054; <b>10.000</b> adoções </li>
                                <li>Não menos que <b>38.000</b> &#128008; castrações</li>
                                <li>Entre cães e gatos, são mais de <b>8.000</b> &#128021; cadastros</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 px-5 pt-5">
                    <h1 class="font-weight-bold py-3"><img src={logoImg} class="img-fluid" alt="" /></h1>
                    <h4>Entre com sua conta</h4>
                    <form>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="email" placeholder="Email" class="form-control my-3 p-4" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="password" placeholder="Senha" class="form-control p-4" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <button onClick={() => irParaHome()} type="button" class="btn1 mt-3 mb-1">Logar</button>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <button type="button" class="btn2 mb-3"><i class="fab fa-google mr-2"></i>Logar com o Google</button>
                            </div>
                        </div>
                        <p>Ainda não é um herói?<a href="/auth/cadastrar"> Cadastre-se!</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}