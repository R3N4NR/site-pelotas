import React from "react";
import './GameInfo.css'
const GameInfo = () => {
  return (
    <div className="container-secundario">
      <img src="/assets/titulo_apresentacao.png" alt="pela grandeza do ideal" />
      <div className="jogo-info">
        <div className="proximo-jogo">
          <span>Próximo jogo</span>
          <span>27/05 15:00</span>
        </div>

        <div className="jogo-times">
          <div className="time">
            <img
              src="https://media.istockphoto.com/id/470573792/pt/vetorial/futebol-escudo.jpg?s=612x612&w=0&k=20&c=uXU-gnR7XO_KLYox4OuQG1L00nPowvu9rZs5N-Yzih0="
              alt="Time A"
            />
            <span>Time A</span>
          </div>
          <div className="time">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/9/96/EsporteClubePelotas.png"
              alt="Time B"
            />
            <span>Time B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
