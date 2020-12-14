import React from "react";
import { withRouter } from "react-router";
import { UserService } from "services";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import "./css/admin-pet-classes.css";

class AdminPetClassesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeClasse: this.props.nome,
      wiki_link: this.props.wiki_link,
      descricao: this.props.descricao,
      expanded: this.props.expanded,
      editing: false,
      autoClose: this.props.autoClose,
      popOverAcao: "",
    };
  }

  async handleUserUpdateClick() {
    const res = await UserService.Update({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
    });

    if (res.data.status) {
      this.setState({ editingProfile: false });
    } else {
      alert("Erro ao salvar, tente novamente.");
    }
  }

  userEditProfileFormComponent() {
    return (
      <div
        className="row"
        style={{ display: this.state.editingProfile ? "" : "none" }}
      >
        <div className="container form-inline">
          <div className="col col-md-12 col-sm-12">
            <div className="form-group">
              <input
                value={this.state.nome}
                onChange={(e) => {
                  this.setState({ nome: e.target.value });
                }}
                type="text"
                className="form-control"
                id="profilename"
                placeholder="Nome"
              />
              <br />
            </div>
            <div className="form-group">
              <input
                value={this.state.sobrenome}
                onChange={(e) => {
                  this.setState({ sobrenome: e.target.value });
                }}
                type="text"
                className="form-control"
                id="profilesurname"
                placeholder="Sobrenome"
              />
              <br />
            </div>
            <br />
            <div className="form-group">
              <input
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <br />
            <div className="col col-md-6 col-sm-6">
              <button
                onClick={(e) => this.handleUserUpdateClick(e)}
                className="btn btn-sm btn-success"
              >
                <i className="fa fa-save" style={{ paddingRight: "10px" }}></i>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleEcluirClick(){
  }
  handleEditarClick(){
  }
  handleClonarClick(){
  }


  buildCardButtons() {
    const keyItem = this.props.subkey;
    let { popOverAcao, nomeClasse } = this.state;

    return (
      <>
        <button
          id={`popover-${keyItem}`}
          className="btn btn-circle btn-danger card-header-btn float-right"
          onClick={this.handleEcluirClick}
          onMouseOver={() => this.setState({ popOverAcao: `Excluir` })}
        >
          <i className="fa fa-times"></i>
        </button>
        <button
          id={`popover-${keyItem}`}
          className="btn btn-circle btn-secondary card-header-btn float-right"
          onClick={this.handleClonarClick}
          onMouseOver={() => this.setState({ popOverAcao: `Duplicar` })}
        >
          <i className="fa fa-clone"></i>
        </button>
        <button
          id={`popover-${keyItem}`}
          className="btn btn-circle btn-primary card-header-btn float-right"
          onClick={this.handleEditarClick}
          onMouseOver={() => this.setState({ popOverAcao: `Alterar` })}
        >
          <i className="fa fa-pen"></i>
        </button>
        <UncontrolledPopover
          trigger="hover"
          placement="top"
          target={`popover-${keyItem}`}
        >
          <PopoverBody>
            <b>{popOverAcao}</b> <u>{nomeClasse}</u>
          </PopoverBody>
        </UncontrolledPopover>
      </>
    );
  }

  render() {
    let { nomeClasse, expanded, descricao, autoClose } = this.state;
    const keyItem = this.props.subkey;
    const criadoEm = new Date(this.props.criadoEm).toDateString();
    const criadoPor = this.props.criadoPor || {
      nome: "Anônimo",
      sobrenome: "",
    };
    const this_parent = `this-${keyItem}`;
    const parent = autoClose ? this.props.data_parent : this_parent;

    return (
      <div id={this_parent} className="card admin-pet-classes">
        <div className="card-header">
          <div className="row">
            <div
              className="col col-md-6 pet-class-header"
              onClick={() => this.setState({ expanded: !expanded })}
              data-toggle={`collapse`}
              data-target={`#collapse-${keyItem}`}
              aria-expanded="true"
              aria-controls={`collapse-${keyItem}`}
            >
              <span>{nomeClasse}</span>
              <span
                className="float-right"
                style={{ color: "rgb(5, 150, 61)" }}
              >
                <i
                  className={`fa fa-chevron-circle-${expanded ? "up" : "down"}`}
                  style={{ color: expanded ? "green" : "gray" }}
                ></i>
              </span>
            </div>
            <div className="col col-md-2"></div>
            <div className="col col-md-4 float-right">
              {this.buildCardButtons()}
            </div>
          </div>
        </div>
        <div
          id={`collapse-${keyItem}`}
          data-parent={`#${parent}`}
          className={`card-body collapse ${this.props.expanded ? "show" : ""}`}
        >
          <h5 className="card-title">{nomeClasse}</h5>
          <hr className="my-4" />
          <p className="card-text">
            {descricao}
            <a href={this.state.wiki_link}>Link para Wiki {nomeClasse}</a>{" "}
          </p>
          <b>Criado em:</b> {criadoEm}, <b>Por</b>{" "}
          <a
            href={`/admin/user?id=${criadoPor._id}`}
          >{`${criadoPor.nome} ${criadoPor.sobrenome}`}</a>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminPetClassesComponent);
