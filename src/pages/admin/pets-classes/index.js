import React from "react";
import { PetService } from "services";
import "./styles.css";

export default class PetsClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petClasses: [],
    };
  }

  PetService;

  async componentWillMount() {
    this.getPetClasses();
  }

  async getPetClasses() {
    await PetService.ObtemPetClasses()
      .then((res) => {
        if (res.data.status === false) {
          this.showErrors(res);
        } else {
          this.setState({ petClasses: res.data }, () =>
            console.log(this.state.petClasses)
          );
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

  mountClasses() {
    return this.state.petClasses.map((x, idx) => {
      return (
        <>
          <div className="col col-sm-12 col-md-12">
            <div
              key={idx + "classpet"}
              className="card"
              style={{ width: "100%" }}
            >
              <div className="card-header">
                <div className="row">
                  <div className="col col-md-4">{x.nome}</div>
                </div>
              </div>
              <div className="card-body">
                <a href={x.wiki_link}> wiki page</a>
                <br />
                {x.descricao}
              </div>
            </div><br />
          </div>
        </>
      );
    });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col col-md-12">{this.mountClasses()}</div>
        </div>
      </>
    );
  }
}
