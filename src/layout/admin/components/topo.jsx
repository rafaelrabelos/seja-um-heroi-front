import React from "react";
import { Redirect } from "react-router-dom";
import { AuthService } from "services";
import { withRouter } from "react-router";
import SwitchLayout from "components/switchLayout";
import UserProfileItem from "components/userProfileItem";
import GlobalSearch from "components/globalSearch";
import "layout/admin/styles/topo.css";

class TopoAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoged: AuthService.IsValideSession(),
    };
  }

  render() {
    const userIsLoged = AuthService.IsValideSession();
    return (
      <>
        {userIsLoged ? "" : <Redirect to="/auth"></Redirect>}
        <nav
          className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark"
          style={{ borderBottomStyle: "solid", borderColor: "grey" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse order-1 order-md-0 dual-collapse2"
            id="navbarSupportedContent"
          >

            <div className="mx-auto order-0">
              <div className="input-group input-group-sm mb-3">
                <GlobalSearch />
              </div>
            </div>

            <div className="w-10 order-2">
              <div className="row text-center ">
                <div className="col-md-6 mb-4">
                  <div className="col col-md-12" style={{ marginTop: "30px" }}>
                    <SwitchLayout />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-10 order-3">
              <div className="row text-center">
                <div className="col-md-6 mb-4 profile-menu">
                  <ul className="navbar-nav mr-auto ">
                    <li className="nav-item dropdown">
                      <UserProfileItem pathBase="/admin" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(TopoAdmin);
