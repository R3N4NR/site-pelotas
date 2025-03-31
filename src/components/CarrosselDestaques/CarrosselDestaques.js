import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarrosselDestaques.css";

const CarrosselDestaques = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500); // Aguarda 500ms antes de mostrar
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className={`destaque ${isVisible ? "carrossel-visible" : ""}`}>
      <Slider {...settings}>
      
        <img
          src="/news/elenco-sub-17.png"
          className="d-block "
          alt="Camisa de time"
        />
        
        <img
          src="/news/pre-jogo.png"
          className="d-block"
          alt="Troféus"
        />

        <img
          src="/news/proximo-jogo.png"
          className="d-block"
          alt="Estádio de futebol"
        />
      </Slider>
    </div>
  );
};

export default CarrosselDestaques;
