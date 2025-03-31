import React from "react";
import "./Socio.css";
import "../../App.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Socio = () => {
  const settingsImages = {
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  

  return (
    <div className="socio-container">
      <div className="titulo">
        <span>SEJA SÓCIO</span>
      </div>
      <div className="socio-info">
        <Slider {...settingsImages} className="carrossel-socio">
            <img src={`${process.env.PUBLIC_URL}/assets/simula-carteirinha.jpg`} alt="Carteirinha de Sócio" />
          
          
            <img src={`${process.env.PUBLIC_URL}/assets/familia.jpeg`} alt="Família" />
          
          
            <img src={`${process.env.PUBLIC_URL}/assets/campo.jpeg`} alt="Campo de Futebol" />
          
        </Slider>

        
          
            <div className="socio-texto">
              <h1>Planos Mensais</h1>
              <span>R$ 30,00 Áureo-cerúleo - apenas uma pessoa por plano</span>
              <span>R$ 60,00 Família - até 4 pessoas por plano</span>
              <span>R$ 80,00 Cadeira - apenas uma pessoa por plano</span>
            
            
              <h1>Planos Anuais - Desconto de 10%</h1>
              <span>R$ 324,00 Áureo-cerúleo</span>
              <span>R$ 648,00 Família</span>
              <span>R$ 864,00 Cadeira</span>
            </div>
         
        
      </div>
    </div>
  );
};

export default Socio;
