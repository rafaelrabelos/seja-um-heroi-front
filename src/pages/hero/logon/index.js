import React from "react";
import { AuthService } from "services";
import petImg from "img/pets.jpg";
import logoImg from "img/logo.png";
import "./styles.css";

export default class Logon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      loginErro: "none",
      loginErroMsg: "",
    };
  }

  componentDidMount() {
    if (AuthService.IsValideSession()) {
      this.gotoHome();
    }
  }

  handleLogin(e) {
    e.preventDefault();

    AuthService.Login({ email: this.state.email, senha: this.state.senha })
      .then((res) => {
        if (res.data.status === false) {
          this.showErrors(res);
        } else {
          alert("Login Efetuado com sucesso!");
          this.gotoHome();
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.showErrors(err.response);
        }
        console.log(err);
        console.log(err.response);
      });
  }

  showErrors(erros) {
    let errors = [];

    if (erros.data && Array.isArray(erros.data.erros)) {
      errors = erros.data.erros;
    } else {
      errors = [`${erros.status} ${erros.statusText} `];
    }

    this.setState({
      loginErro: true,
      loginErroMsg: errors.map((x, idx) => <p key={idx + "logon"}>{x}</p>),
    });
  }

  gotoHome() {
    this.props.history.push("/hero");
  }

  render() {
    return (
      <section className="form my-4 mx-5">
        <div className="container main-container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-6">
              <div className="col-lg-12 col-md-10">
                <img alt="dog-banner" src={petImg} className="img-fluid" />
              </div>
              <div className="col-lg-12 col-md-8">
                <p className="centertext descriptiontext">
                  &#128073; Diariamente centenas de animais são abondonados por
                  seus donos. Acesse nossa plataforma e nos ajude a mudar esta
                  realidade, adotando um amiguinho e sendo o herói.
                  <br />
                </p>

                <ul style={{ margin: "30px", fontsize: "large" }}>
                  <li>
                    Já são mais de &#128054; <b>10.000</b> adoções{" "}
                  </li>
                  <li>
                    Não menos que <b>38.000</b> &#128008; castrações
                  </li>
                  <li>
                    Entre cães e gatos, são mais de <b>8.000</b> &#128021;
                    cadastros
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 px-5 pt-5">
              <h1 className="font-weight-bold py-3">
                <img src={logoImg} className="img-fluid" alt="" />
              </h1>
              <br />
              <h4>Entre com sua conta</h4>
              <form onSubmit={this.handleLogin}>
                <div className="form-row">
                  <div className="col-lg-10">
                    <input
                      type="email"
                      placeholder="Email"
                      value={this.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      className="form-control my-3 p-4"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-10">
                    <input
                      type="password"
                      placeholder="Senha"
                      value={this.senha}
                      onChange={(e) => {
                        this.setState({ senha: e.target.value });
                      }}
                      className="form-control p-4"
                      required={true}
                    />
                  </div>
                </div>
                <div
                  className="form-row"
                  style={{ display: this.state.loginErro }}
                >
                  <div className="col-lg-10">
                    <br />
                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Ooops!</strong>
                      {this.state.loginErroMsg}{" "}
                      <a href="/auth/recuperar-senha">Recuperar senha</a>
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({ loginErroMsg: "", loginErro: "none" })
                        }
                        className="close"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-10">
                    <button
                      onClick={(e) => this.handleLogin(e)}
                      type="submit"
                      className="btn1 mt-3 mb-1"
                    >
                      Logar
                    </button>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-10">
                    <button type="button" className="btn2 mb-3">
                      <i className="fab fa-google mr-2"></i>Logar com o Google
                    </button>
                  </div>
                </div>
                <p>
                  Ainda não é um herói?
                  <a href="/auth/cadastrar"> Cadastre-se!</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
