import React from "react";
import { Container, Row } from "reactstrap";
import { Switch, Redirect } from "react-router-dom";
//components
import Rodape from "./components/rodape";
import routes, { getRoutes } from "routes.js";

class AuthLayout extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content">
          {/* Page content */}

          {/* roteamento do layout */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
                {getRoutes(routes, "/auth")}
                <Redirect from="*" to="/auth/login" />
              </Switch>
            </Row>
          </Container>
        </div>
        <Rodape />
      </>
    );
  }
}

export default AuthLayout;
