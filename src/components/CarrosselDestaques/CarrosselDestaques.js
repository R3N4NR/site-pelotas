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
      <div>
        <img
          src="https://manutencaoemacao.com/wp-content/uploads/2022/10/Camisa-Time-Melvin-002.jpg"
          className="d-block "
          alt="Camisa de time"
        />
        </div>
    

        <img
          src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2024/01/trofeus-ou-trofeis.jpg?crop=1&resize=1212,909"
          className="d-block"
          alt="Troféus"
        />


        <img
          src="https://img.freepik.com/vetores-gratis/estadio-de-futebol_1284-22432.jpg"
          className="d-block"
          alt="Estádio de futebol"
        />
      </Slider>
    </div>
  );
};

export default CarrosselDestaques;
