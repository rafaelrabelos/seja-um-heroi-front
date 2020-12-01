import React from "react";
import { withRouter } from "react-router";
import "layout/principal/styles/topo.css";

class GlobalSearch extends React.Component {
  render() {
    return (
      <>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Pesquisar"
          aria-label="Pesquisar"
        />
        <button
          className="btn btn-sm btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          <i className="fa fa-search"></i>
        </button>
      </>
    );
  }
}

export default withRouter(GlobalSearch);
