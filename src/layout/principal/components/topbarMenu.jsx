import React from "react";
import { withRouter } from "react-router";
import "layout/principal/styles/topo.css";

class TopBarMenu extends React.Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/hero">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Cadastrar
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/hero">
              Cadastrar Caso
            </a>
            <a className="dropdown-item" href="/hero/cadastrar">
              Cadastrar Pets
            </a>
            <a className="dropdown-item" href="/hero">
              Cadastrar Usuário
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hero">
            Agendar castração
          </a>
        </li>
      </ul>
    );
  }
}

export default withRouter(TopBarMenu);
