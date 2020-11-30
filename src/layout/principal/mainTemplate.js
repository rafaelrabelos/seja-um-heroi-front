import React from "react";
import { Container, Row } from "reactstrap";
import { Switch, Redirect } from "react-router-dom";
//components
import Topo from "./components/topo";
import Rodape from "./components/rodape";
import routes, { getRoutes } from "routes.js";
import "./styles/layout.css";

class HeroLayout extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <Topo />
        <div className="main-content">
          {/* Page content */}

          {/* roteamento do layout */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {getRoutes(routes, "/hero")}
                <Redirect from="*" to="/hero/index" />
              </Switch>
            </Row>
          </Container>
        </div>
        <Rodape />
      </>
    );
  }
}

export default HeroLayout;
