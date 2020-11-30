import React from "react";
import { AuthService } from "services";
import { withRouter } from "react-router";
import "layout/principal/styles/topo.css";

class SwitchLayout extends React.Component {
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

  handleSwitchToAdminLayout = () =>
    AuthService.Logout().then(() => {
      this.props.history.push("/auth");
    });

  render() {
    return (
      <div className="w-10 order-4 dual-collapse2">
        <div className="row text-center ">
          <div className="col-md-6 mb-4 profile-menu ">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item dropdown">
                <div className="row">
                  <div className="col col-md-12">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="layoutDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="row">
                        <div className="col col-md-12">
                          <i className="fa-2x fas fa-desktop"></i>
                        </div>
                      </div>
                      <small className="username">Alternar visão</small>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="layoutDropdown"
                    >
                      <a className="dropdown-item" href="/hero">
                        <div className="row">
                          <div className="col col-md-2">
                            <i className="fa fa-user-circle"></i>
                          </div>
                          <div className="col col-md-2">Herói (usuário)</div>
                        </div>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/admin">
                        <div className="row">
                          <div className="col col-md-2">
                            <i className="fa fa-user-cog"></i>
                          </div>
                          <div className="col col-md-2">Administrador</div>
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
    );
  }
}

export default withRouter(SwitchLayout);
