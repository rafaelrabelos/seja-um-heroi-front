import React from "react";
import { withRouter } from "react-router";
import { UserService } from "services";

class UserProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      userProfile: {},
      editingProfile: false,
    };
  }

  async componentWillMount() {
    await this.getAndSetSelfUser();
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

  async getAndSetSelfUser() {
    await UserService.Obtem()
      .then((res) => {
        if (res.data.status === false) {
          this.showErrors(res);
        } else {
          this.setState({
            userProfile: res.data,
            nome: res.data.nome,
            sobrenome: res.data.sobrenome,
            email: res.data.email,
          });
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

  userPermissionsComponent() {
    const permissions = [
      { user: !this.state.userProfile.system_user },
      { system: this.state.userProfile.system_user },
      { admin: this.state.userProfile.administrador },
      { root: this.state.userProfile.root },
    ];

    return (
      <div className="row">
        {permissions
          .filter((x) => x.admin || x.root || x.system || x.user)
          .map((x, idx) => {
            const permissionName = Object.keys(x)[0];
            return (
              <div
                key={idx + "profile"}
                className={
                  permissionName.length > 8
                    ? "col-sm-4 col-md-4"
                    : permissionName.length >= 5
                    ? "col-sm-3 col-md-3"
                    : "col-sm-2 col-md-2"
                }
              >
                <h5>
                  <span
                    className={`badge badge-pill ${
                      permissionName === "user" ? "badge-info" : "badge-warning"
                    }`}
                  >
                    {permissionName}
                  </span>
                </h5>
              </div>
            );
          })}
      </div>
    );
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

  render() {
    const memberSince = new Date(this.state.userProfile.criadoEm);
    const memberAge = Math.abs(
      new Date(
        Date.now() - new Date(this.state.userProfile.data_nascimento).getTime()
      ).getFullYear() - 1970
    );

    return (
      <>
        <div className="card" style={{ width: "100%" }}>
          <div className="card-header">
            <div className="row">
              <div className="col col-md-4">
                <img
                  alt="avatar"
                  className="circle-img rounded-circle"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div className="col col-md-12"></div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <b>{this.state.userProfile.nome}</b>
            </h5>
            <p className="card-text">
              {this.state.userProfile.nome} {this.state.userProfile.sobrenome}(
              {this.state.userProfile.email})
            </p>
            <p className="card-text">
              {this.state.userProfile.nome} é membro desde{" "}
              {memberSince.toLocaleDateString("pt")}, e tem {memberAge} anos.
            </p>
            {this.userPermissionsComponent()}
            <br />
            <div>{this.userEditProfileFormComponent()}</div>
            <br />
            <button
              onClick={() =>
                this.setState({ editingProfile: !this.state.editingProfile })
              }
              className={`btn btn-sm ${
                !this.state.editingProfile ? " btn-success" : "btn-warning"
              }`}
            >
              <i
                className={`fa ${
                  !this.state.editingProfile ? "fa-user-edit" : "fa-ban"
                }`}
                style={{ paddingRight: "10px" }}
              ></i>
              {!this.state.editingProfile
                ? "Alterar meus dados"
                : "Cancelar edição"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserProfileComponent);
