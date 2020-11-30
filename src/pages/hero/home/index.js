import React from "react";
import bulldog from "img/bulldog.jpg";
import corgi from "img/corgi.jpg";
import lulu from "img/lulu.jpg";
import pug from "img/pug.jpg";
import salsicha from "img/salsicha.jpg";
import shitsu from "img/shitsu.jpg";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="container form-inline">
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="topo"
            src={bulldog}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Bulldog</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="dog"
            src={corgi}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Corgi</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="dog"
            src={salsicha}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Salsicha</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="dog"
            src={shitsu}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Shitsu</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="dog"
            src={pug}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Pug</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "1%" }}>
          <img
            alt="dog"
            src={lulu}
            className="card-img-top"
            width="30px"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Lulu</h5>
            <p className="card-text">
              Cachorro fofo, com nenhum problema de comportamento e muito bem
              criado.
            </p>
            <a href="/hero" className="btn btn-primary">
              Mais Informações
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
