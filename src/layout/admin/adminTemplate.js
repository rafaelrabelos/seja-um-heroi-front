import React from "react";
import { Container, Row } from "reactstrap";
import { Switch, Redirect } from "react-router-dom";
//components
import TopoAdmin from "./components/topo";
import RodapeAdmin from "./components/rodape";
import routes, { getRoutes } from "routes.js";
import "./styles/layout.css";

class AdminLayout extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  shwowSwitchLayout() {
    const userRights = sessionStorage.getItem("usertype");
    return (userRights === "root" || userRights === "admin") === true || false;
  }

  render() {
    const isAdm = this.shwowSwitchLayout();
    return (
      <>
        {!isAdm ? <Redirect to="/hero" /> : ""}
        <TopoAdmin />
        <div className="main-content">
          {/* Page content */}

          {/* roteamento do layout */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {getRoutes(routes, "/admin")}
                <Redirect from="*" to="/admin/home" />
              </Switch>
            </Row>
          </Container>
        </div>
        <RodapeAdmin />
      </>
    );
  }
}

export default AdminLayout;
