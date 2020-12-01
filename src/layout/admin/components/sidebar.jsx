import React from "react";
import { withRouter } from "react-router";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
  }

  async componentWillMount() {}

  render() {
    return (
      <>
        <div class="sidenav">
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Pets
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                <a href="/admin/pets-classes" className="btn btn-block btn-sm btn-primary"> Classes</a>
                <a href="/admin/pets-raças" className="btn btn-block btn-sm btn-primary"> Raças</a>
                <a href="/admin/pets-vacinas" className="btn btn-block btn-sm btn-primary"> Vacinas</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Usuários
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <a href="/admin/users-admins" className="btn btn-block btn-sm btn-primary"> Administradores</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SideBar);
