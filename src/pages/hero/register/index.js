import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "img/logo.png";
import { ProfileService, AuthService } from "services";
import Loading from "components/loading";
import "./styles.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      senhaRepetida: "",
      cadastrarErro: "none",
      cadastrarErroMsg: "",
      loading: false,
    };
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({ loading: true });

    if (this.state.cadastrarErroMsg.length > 0) {
      this.validaSenhas();
      this.validaForm();
      this.setState({ loading: false });
      return;
    }

    ProfileService.Create({
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
    })
      .then((res) => {
        if (res.data.status === false) {
          this.showErrors(res);
        } else {
          alert("Cadastro Efetuado com sucesso!");
          AuthService.Login({
            email: this.state.email,
            senha: this.state.senha,
          }).then(() => this.gotoAuth());
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.showErrors(err.response);
        }
        console.log(err);
        console.log(err.response);
      });
    this.setState({ loading: false });
  }

  showErrors(erros) {
    let errors = [];

    if (erros.data && Array.isArray(erros.data.erros)) {
      errors = erros.data.erros;
    } else {
      errors = [`${erros.status} ${erros.statusText} `];
    }

    this.setState({
      cadastrarErro: true,
      cadastrarErroMsg: errors.map((x, idx) => <p key={idx + "logon"}>{x}</p>),
    });
  }

  validaSenhas() {
    if (this.state.senha !== this.state.senhaRepetida) {
      this.setState({
        cadastrarErro: true,
        cadastrarErroMsg: ["As senha não são iguais"],
      });
    } else {
      this.setState({ cadastrarErro: "none", cadastrarErroMsg: [] });
    }
  }

  validaForm() {
    if (
      this.state.nome === "" ||
      this.state.email === "" ||
      this.state.senha === ""
    ) {
      this.setState({
        cadastrarErro: true,
        cadastrarErroMsg: ["Informe todos os campos."],
      });
    } else {
      this.setState({ cadastrarErro: "none", cadastrarErroMsg: [] });
    }
  }

  gotoAuth() {
    this.props.history.push("/auth");
  }

  render() {
    return (
      <section className="form my-4 mx-5">
        <div className="register-container">
          <div className="content">
            <section>
              <img src={logoImg} alt="Seja um Herói" />

              <h1>Cadastro</h1>
              <p>
                Faça seu cadastro e torne-se um herói, adotanto um pet e tirando
                ele das ruas.
              </p>

              <Link className="back-link" to="/auth">
                <FiArrowLeft size={16} color="#E02041" />
                Já tenho cadastro
              </Link>
            </section>

            <form onSubmit={this.handleRegister}>
              <input
                placeholder="Nome"
                value={this.nome}
                onChange={(e) => {
                  this.setState({ nome: e.target.value });
                }}
                required={true}
              />

              <input
                type="email"
                placeholder="E-mail"
                value={this.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                required={true}
              />

              <input
                type="password"
                placeholder="Senha"
                value={this.senha}
                onChange={(e) => {
                  this.setState({ senha: e.target.value });
                }}
                required={true}
              />

              <input
                type="password"
                placeholder="Repetir Senha"
                value={this.state.senhaRepetida}
                onChange={(e) =>
                  this.setState({ senhaRepetida: e.target.value }, () =>
                    this.validaSenhas()
                  )
                }
                required={true}
              />
              <div className="row">
                <div
                  className="form-row"
                  style={{ display: this.state.cadastrarErro }}
                >
                  <div className="col-lg-12">
                    <br />
                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Ooops! </strong>
                      {this.state.cadastrarErroMsg}
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({
                            cadastrarErroMsg: "",
                            cadastrarErro: "none",
                          })
                        }
                        className="close"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled={this.state.loading}
                className="button"
                onClick={(e) => this.handleRegister(e)}
                type="button"
              >
                <span className="" role="status" aria-hidden="true">
                  {!this.state.loading ? (
                    "Cadastrar"
                  ) : (
                    <Loading loading={this.state.loading} />
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
