import React from "react";
import { withRouter } from "react-router";
import "./css/components.css";

class SwitchLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admLayout: false,
    };
  }

  componentDidMount() {
    this.setState({
      admLayout: this.props.match.path === "/admin",
    });
  }

  shwowSwitchLayout() {
    const userRights = sessionStorage.getItem("usertype");
    return (userRights === "root" || userRights === "admin") === true || false;
  }

  render() {
    const isAdm = this.shwowSwitchLayout();
    return (
      <>
        <ul
          className="navbar-nav mr-auto"
          style={{ display: isAdm ? "" : "none" }}
        >
          <li className="nav-item dropdown">
            <div className="row">
              <div className="col">
                <button
                  className={`btn btn-circle btn-sm btn-${
                    !this.state.admLayout ? "" : "outline-"
                  }secondary`}
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
                  <div className="col col-md-12 user-description">
                    <div className="row">
                      <div className="col col-md-12">Alterna visão para:</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href={this.state.admLayout ? "/hero" : "/admin"}
                  >
                    <div className="row">
                      <div className="col col-md-2">
                        <i className="fa fa-user-cog"></i>
                      </div>
                      <div className="col col-md-2">
                        {!this.state.admLayout ? "Administrador" : "Usuario"}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(SwitchLayout);
