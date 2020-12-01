import React from "react";
import { AuthService } from "services";
import { withRouter } from "react-router";
import "./css/components.css";

class UserProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoged: AuthService.IsValideSession(),
    };
  }

  componentDidMount() {
    if (this.state.userIsLoged) {
      this.setState({
        userName: sessionStorage.getItem("nome"),
        userEmail: sessionStorage.getItem("email"),
      });
    } else {
      this.handleLogout();
    }
  }

  handleLogout = () =>
    AuthService.Logout().then(() => {
      this.props.history.push("/auth");
    });

  render() {
    return (
      <>
        <a
          className="nav-link dropdown-toggle"
          href="/#"
          id="profileDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="row">
            <div className="col col-md-12">
              <img
                alt="avatar"
                className="circle-img rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                data-holder-rendered="true"
              />
              <span className="badge badge-danger">3</span>
            </div>
          </div>

          <small className="username">{this.state.userName}</small>
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="profileDropdown"
        >
          <div className="col col-md-12 user-description">
            <div className="row">
              <div className="col col-md-2">
                <span className="badge badge-warning">1</span>
                <button
                  className="btn btn-circle btn-sm btn-outline-primary"
                  type="submit"
                >
                  <i className="fa fa-paw"></i>
                </button>
              </div>
              <div className="col col-md-2">
                <span className="badge badge-pill badge-warning">2</span>
                <button
                  className="btn btn-circle btn-sm btn-outline-primary"
                  type="submit"
                >
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
              <div className="col col-md-2"></div>
            </div>
          </div>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href={`${this.props.pathBase}/profile`}>
            <div className="row">
              <div className="col col-md-2">
                <i className="fa fa-user-circle"></i>
              </div>
              <div className="col col-md-2">Perfil</div>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item"
            href="/hero"
            onClick={() => this.handleLogout()}
          >
            <div className="row">
              <div className="col col-md-2">
                <span style={{ fontsize: "3em", color: "Tomato" }}>
                  <i className="fa fa-sign-out-alt"></i>
                </span>
              </div>
              <div className="col col-md-2">Sair</div>
            </div>
          </a>
        </div>
      </>
    );
  }
}

export default withRouter(UserProfileItem);
