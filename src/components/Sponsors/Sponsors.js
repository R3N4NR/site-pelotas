import React, {useEffect, useState} from "react";
import './Sponsors.css'
const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  return (
    <div className="patrocinador-container" id="bloco-patrocinador">
      <div className="titulo">
        <span>PATROCINADORES</span>
      </div>
      <div className={`d-flex blocos ${isVisible ? "visivel" : ""}`}>
        <div className="bloco"></div>
        <div className="bloco"></div>
        <div className="bloco"></div>
        <div className="bloco"></div>
        <div className="bloco"></div>
      </div>
    </div>
  );
};

export default Sponsors;
