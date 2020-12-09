import React from "react";
import { withRouter } from "react-router";
import { getPageName } from "routes";
import "./css/breadcrumb.css";
class BreadCrumb extends React.Component {
  render() {
    const paths = this.props.location.pathname
      .split("/")
      .filter((x) => x !== "");
    let link = "";

    return (
      <nav aria-label="breadcrumb navigation">
        <ol className="breadcrumb">
          {paths.map((x, idx) => {
            link = `${link}/${x}`;
            const active = idx + 1 === paths.length;
            return (
              <li
                key={`breadcumb-${idx}`}
                className={`breadcrumb-item ${active ? "active" : ""}`}
                aria-current={active ? "page" : ""}
              >
                {active ? (
                  getPageName(link)
                ) : (
                  <a href={link}>{getPageName(link)}</a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
}

export default withRouter(BreadCrumb);
