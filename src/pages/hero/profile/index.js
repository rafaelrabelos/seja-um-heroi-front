import React from "react";
import { UserService } from "services";
import { UserProfileComponent } from "pages/shared";
import "./styles.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {},
    };
  }

  async componentWillMount() {
    await this.getAndSetSelfUser();
  }

  async getAndSetSelfUser() {
    await UserService.Obtem()
      .then((res) => {
        if (res.data.status === false) {
          this.showErrors(res);
        } else {
          this.setState({ userProfile: res.data });
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.showErrors(err.response);
        }
        console.log(err);
        console.log(err.response);
      });
  }

  showErrors(erros) {
    let errors = [];

    if (erros.data && Array.isArray(erros.data.erros)) {
      errors = erros.data.erros;
    } else {
      errors = [`${erros.status} ${erros.statusText} `];
    }

    this.setState({
      loginErro: true,
      loginErroMsg: errors.map((x, idx) => <p key={idx + "logon"}>{x}</p>),
    });
  }
  render() {
    return (
      <>
        <div className="col col-md-4">
          <UserProfileComponent />
        </div>
        <div className="col col-md-8">aa</div>
      </>
    );
  }
}
