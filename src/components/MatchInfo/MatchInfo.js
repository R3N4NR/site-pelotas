import { useEffect } from "react";
import './MatchInfo.css'
const ServicoDeJogo = () => {
  useEffect(() => {
    const jogoTexto = document.getElementById("jogo-pelotas");
    if (jogoTexto && jogoTexto.innerHTML.includes("PELOTAS")) {
      jogoTexto.classList.add("servico-de-jogo-pelotas");
    }
  }, []);

  return (
    <div className="servico-de-jogo-container p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="titulo text-xl font-bold text-center text-gray-800 mb-4">
        <span>SERVIÇO DE JOGO</span>
      </div>
      <div className="servico-de-jogo-info space-y-2">
        <div className="servico-de-jogo-textos flex justify-between items-center" id="jogo-pelotas">
          <span className="text-blue">PELOTAS</span>
          <span className="text-yellow">VISITANTE</span>
        </div>
        <div className="servico-de-jogo-textos flex justify-between">
          <span className="pl-2">Dia 27/05 - Sábado</span>
          <span>16:30</span>
        </div>
        <div className="servico-de-jogo-textos">
          <span className="block">Ingressos</span>
          <span className="block">R$ 60,00 inteira</span>
          <span className="block">R$ 30,00 meia-entrada</span>
        </div>
        <div className="servico-de-jogo-textos flex justify-between">
          <span>Sócio em dia</span>
          <span className="font-bold">NÃO PAGA</span>
        </div>
      </div>
    </div>
  );
};

export default ServicoDeJogo;
