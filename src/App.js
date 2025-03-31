import React from "react";
import './App.css';
import Shop from './components/Shop/Shop';
import Sponsors from './components/Sponsors/Sponsors';
import GameInfo from './components/GameInfo/GameInfo';
import Socio from './components/Socio/Socio';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import CarrosselDestaques from "./components/CarrosselDestaques/CarrosselDestaques";
import Fornecedora from "./components/Fornecedora/Fornecedora";
import Enderecos from "./components/Address/Address";
import ServicoDeJogo from "./components/MatchInfo/MatchInfo";
 
function App() {

  return (
    <div className="App">
    <Header />
      <main className="main-container">
      <div className="container-wrapper">
        <CarrosselDestaques />
        <GameInfo />
        </div>
        <Shop/>
        <Sponsors />
        <ServicoDeJogo />
        <Socio />
      </main>
      <Fornecedora/>
      <Enderecos/>
      <Footer />
    </div>
  );
}

export default App;
