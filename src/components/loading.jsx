import React from "react";

export default class Loading extends React.Component {
  render() {
    return (
      <div
        class="spinner-border spinner-border-dm text-danger"
        role="status"
      ></div>
    );
  }
}
