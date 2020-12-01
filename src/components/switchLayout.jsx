import React from "react";
import { AuthService } from "services";
import { withRouter } from "react-router";
import "./css/components.css";

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
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-circle btn-sm btn-outline-secondary"
                href="/#"
                id="layoutDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-desktop"></i>
              </button>
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
    );
  }
}

export default withRouter(SwitchLayout);
