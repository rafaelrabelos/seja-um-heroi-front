import React from "react";
import "./styles.css";

export default function AdminDashboard() {
  return (
    <>
      <div className="container form-inline">
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="topo"
            src="/sc_undefined"
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Admin</h5>
            <p className="card-text">Dashboard card</p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
