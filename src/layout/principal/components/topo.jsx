import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthService } from './../../../Services';
import logoImg from 'img/logo.png';
import { withRouter } from "react-router";
import 'layout/principal/styles/topo.css';

class Topo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            userIsLoged: AuthService.IsValideSession()
        };
    }

    componentDidMount(){
        if(this.state.userIsLoged){
            this.setState({
            userName: sessionStorage.getItem("nome"),
            userEmail: sessionStorage.getItem("email")
            });
        }else{
            this.handleLogout();
        }
    }

    handleLogout = () => AuthService.Logout()
    .then( () =>{
        this.props.history.push('/auth')
    });

    render(){
        return(
        <>
         { this.state.userIsLoged ? "" : <Redirect to="/auth"></Redirect>}
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light" style={{borderBottomStyle:"ridge"}}>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/hero">
                    <img src={logoImg} width="100" height="30" alt="" />
                </a>
            </nav>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-1 order-md-0 dual-collapse2" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="/hero">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cadastrar
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/hero">Cadastrar Caso</a>
                        <a class="dropdown-item" href="/hero/cadastrar">Cadastrar Pets</a>
                        <a class="dropdown-item" href="/hero">Cadastrar Usuário</a>
                    </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/hero">Agendar castração</a>
                    </li>
                </ul>
                <div class="mx-auto order-0">
                    <form class="form-inline my-2 my-lg-0">
                        <div class="input-group input-group-sm mb-3">
                            <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                            <button class="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div class="w-10 order-3 dual-collapse2">
                    <div class="row text-center ">
                        <div class="col-md-6 mb-4 profile-menu ">
                        <ul class="navbar-nav mr-auto ">
                            <li class="nav-item dropdown">
                                
                                <div className="row">
                                    <div className="col col-md-12">
                                        <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="row">
                                                <div className="col col-md-12">
                                                    <img 
                                                    className="circle-img rounded-circle" 
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" 
                                                    data-holder-rendered="true" 
                                                    />
                                                </div>
                                            </div>
                                            <small className="username">{this.state.userName}</small>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                                            <div className="col col-md-12 user-description">
                                                <small>{this.state.userName}({this.state.userEmail})</small>
                                            </div>
                                            <div class="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">
                                                <div className="row">
                                                    <div className="col col-md-2"><i className="fa fa-user-circle"></i></div>
                                                    <div className="col col-md-2">Perfil</div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/hero" onClick={ () => this.handleLogout()}>
                                                <div className="row">
                                                    <div className="col col-md-2">
                                                        <span style={{fontsize: "3em", color: "Tomato"}}>
                                                            <i className="fa fa-sign-out-alt"></i>
                                                        </span>
                                                    </div>
                                                    <div className="col col-md-2">Sair</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav></>
        );
    }

}

export default withRouter(Topo)