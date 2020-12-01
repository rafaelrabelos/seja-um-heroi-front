import React from "react";
import { withRouter } from "react-router";
import "layout/principal/styles/topo.css";

class TopBarMenu extends React.Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a
            className="btn btn-md nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>
              <i className="fa fa-cog"> </i> Gerenciar
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/admin/pets">
              Pets
            </a>
            <a className="dropdown-item" href="/admin/users">
              Usuários
            </a>
            <a className="dropdown-item" href="/admin/system">
              Sistema
            </a>
          </div>
        </li>
      </ul>
    );
  }
}

export default withRouter(TopBarMenu);
