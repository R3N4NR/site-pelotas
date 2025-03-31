import React from "react";
import './Address.css'
const Enderecos = () => {
  return (
    <div className="enderecos">
      <div className="lado-azul">
        <ul>
          <li style={{ fontWeight: "bolder" }}>Estádio Boca do Lobo</li>
          <li>Parque Dom Antônio Zattera, 300</li>
          <li>Centro , Pelotas/RS - Brasil</li>
          <li>CEP: 00000-000 - Tel: (xx) 9 xxxx-xxxx</li>
        </ul>
      </div>
      <div className="lado-amarelo">
        <ul>
          <li style={{ fontWeight: "bolder" }}>CT Parque Lobão</li>
          <li>Av. Engenheiro Ildefonso Simões Lopes, 4071</li>
          <li>Três Vendas, Pelotas/RS - Brasil</li>
          <li>CEP: 00000-000 - Tel: (xx) 9 xxxx-xxxx</li>
        </ul>
      </div>
    </div>
  );
};

export default Enderecos;