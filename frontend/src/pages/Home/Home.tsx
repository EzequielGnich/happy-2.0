import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import logoImg from "../../assets/images/logo.svg";

export default function Home() {
  return (
    <div id="home">
      <div className="content-wrapper">
        <div className="content-header">
          <img src={logoImg} alt="Logo Happy" />

          <div className="header-information">
            <strong>Joinville</strong>
            <p>Santa Catarina</p>
          </div>
        </div>

        <div className="main-wrapper">
          <h1>Leve felicidade para o mundo</h1>
          <h3>Visite orfanatos e mude o dia de muitas crianças.</h3>
        </div>

        <div className="right-content">
          <Link to="#" className="access-restrict">
            Acesso Restrito
          </Link>

          <Link to="#" className="access-app">
            <FiArrowRight size={32} color="#8D734B" />
          </Link>
        </div>
      </div>
    </div>
  );
}
