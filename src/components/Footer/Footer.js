import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="rodape">
      <div className="row">
        <div className="col escudo-socio">
          <img src="/assets/escudo.png" alt="escudo do pelotas" />
          <img src="/assets/seja-socio.png" alt="seja-socio" />
        </div>
        <div className="col">
          <ul>
            <li>Seja sócio</li>
            <li>Ingressos</li>
            <li>Notícias</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>História</li>
            <li>Elenco</li>
            <li>Calendário</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Siga o Pelotas</li>
            <li>@ecpelotas</li>
            <li>@ecpelotas</li>
            <li>Esporte Clube Pelotas</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Contato</li>
            <li>Institucional</li>
          </ul>
        </div>
      </div>
      <div className="renan-ramalho">
        <span>Feito por Renan Ramalho</span>
      </div>
    </div>
  );
};

export default Footer;
