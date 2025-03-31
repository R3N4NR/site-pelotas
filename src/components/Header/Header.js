import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { PiXLogoBold } from "react-icons/pi";
import './Header.css'
import CustomDropdown from '../Dropdown/Dropdown';
const Header = () => {
  return (
    <header>
      <div className="topo">
      <div className='redes-sociais-header'>
      <div ><ImFacebook2 /></div>
      <div><BsInstagram /></div>
      <div><PiXLogoBold /></div>
      </div>
      </div>
      <div>
        <img
          className="imagem img-fluid"
          src="https://upload.wikimedia.org/wikipedia/pt/9/96/EsporteClubePelotas.png"
          alt="escudo do pelotas"
        />
        
      </div>
        <CustomDropdown />
      <div className="baixo">
        <div className="texto d-flex justify-content-center flex-wrap">
          <span>Notícias</span>
          <span>História</span>
          <span>Calendário</span>
          <span>Seja Sócio</span>
          <span>Elenco</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
