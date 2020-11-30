import React from "react";
import logoImg from "img/logo.png";
import { Row } from "reactstrap";
import "layout/auth/styles/rodape.css";

export default function Rodape() {
  return (
    <>
      <footer className="footer-distributed">
        <Row>
          <div className="footer-left">
            <span>
              <img src={logoImg} width="100" height="30" alt="" />
            </span>
            <p className="footer-links">
              <a href="/" className="link-1">
                Home
              </a>
              <a href="/auth/blog">Blog</a>
              <a href="/auth/cases">Cases</a>
              <a href="/auth/numeros">Números</a>
              <a href="/auth/contribuir">Contribuir</a>
              <a href="/auth/sobre">Sobre-nos</a>
              <a href="/auth/contato">Contato</a>
            </p>
            <p className="footer-company-name">
              Seja um Herói, 2020 © Todos os direitos Reservados.
            </p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">
                  contato@sejaumheroi.com.br
                </a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>Sobre</span>
              Seja um herói! Adote um pet e seja o herói dele. Ele vai ser seu
              fân para sempre.
              <br />
              Buscamos facilitar o trabalho dos heróis.
            </p>
            <div className="footer-icons">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </Row>
      </footer>
    </>
  );
}
