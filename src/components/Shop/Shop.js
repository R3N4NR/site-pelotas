import React, { Component } from "react";
import './Shop.css'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../CarouselArrows/Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Shop = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Telas menores que 768px
        settings: {
          slidesToShow: 1,
          arrows:false
        },
      },
      {
        breakpoint: 1024, // Entre 768px e 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440, // Acima de 1024px
        settings: {
          slidesToShow: 3,

        },
      },
    ],
  };

  return (
    <div className="loja-container">
      <div className="titulo">
        <span>LOJA ALCATEIA</span>
      </div>
      <Slider {...settings} className="autoplay">
        <div className="item-box">
          <div className="item-in">
            <img src="/assets/camisa_de_jogo_casa.jpg" alt="Camisa de Jogo Casa" />
            <span>Camisa de jogo Casa</span>
            <span>Disponível</span>
          </div>
        </div>
        <div className="item-box">
          <div className="item-in">
            <img src="/assets/camisa_de_jogo_fora.jpeg" alt="Camisa de Jogo Fora" />
            <span>Camisa de jogo Fora</span>
            <span>Disponível</span>
          </div>
        </div>
        <div className="item-box">
          <div className="item-in">
            <img src="/assets/calcao_azul.webp" alt="Calção Azul" />
            <span>Calção de jogo Fora</span>
            <span>Disponível</span>
          </div>
        </div>
        <div>
          <img
            src="https://memoriasdoesporteoficial.com.br/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-08-at-18.51.52.jpeg"
            alt="Item Extra"
          />
        </div>
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976346-MLB46417818337_062021-O.webp"
            alt="Outro Item Extra"
          />
        </div>
      </Slider>
    </div>
  );
};


export default Shop;
