import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainPainel from "../../components/MainPainel";
import "./styles.css";

function Painel() {
  return (
    <div className="home">
      <Header />

      <MainPainel />

      <Footer />
    </div>
  );
}

export default Painel;
