import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../img/logo.png';
import { ProfileService } from '../../Services';
import './styles.css';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            cadastrarErro: "none",
            cadastrarErroMsg:""
        };
    }

    componentDidMount(){
        if(ProfileService.IsValideSession()){
           this.gotoHome();
        }
    }


    handleRegister(e){
        e.preventDefault();

        ProfileService.Create({nome:this.state.nome, email:this.state.email, senha:this.state.senha})
        .then( res =>{
            if(res.data.status == false){
                this.showErrors(res);
            }else{
                alert("Cadastro Efetuado com sucesso!");
                this.gotoHome();
            }
            console.log(res.data.status);
        })
        .catch(err =>{
            if(err.response && err.response.data){
                this.showErrors(err.response);
            }
            console.log(err);
            console.log(err.response);
        });
    }

    showErrors(erros){
        this.setState({loginErro: true, loginErroMsg:erros.data.erros.map(x => <p>{x}</p>) });
    }

    gotoHome(){
        this.props.history.push('/home');
    }//navegação através de uma função javascript, quando não se pode colocar o link do ReactRouter Dom


    render(){

        return (
            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Seja um Herói"/>
    
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro e torne-se um herói, adotanto um pet e tirando ele das ruas.</p>
    
                        <Link className="back-link" to="/auth">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Já tenho cadastro
                        </Link>
                    </section>
    
                    <form onSubmit={this.handleRegister}>
                        <input placeholder="Nome" value={this.nome} onChange={ (e) =>{ this.setState({nome: e.target.value})}} required={true}/>
                        <input type="email" placeholder="E-mail" value={this.email} onChange={ (e) =>{ this.setState({email: e.target.value})}} required={true}/>
                        
                        <hr />
                        <input type="password" placeholder="Senha" value={this.senha} onChange={ (e) =>{ this.setState({senha: e.target.value})}}/>
                        {/* <input type="password" placeholder="Repetir Senha" value={repeteSenha} onChange={e => setRepeteSenha(e.target.value)}/> */}
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }

}