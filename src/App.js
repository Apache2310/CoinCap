import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import { CurrCryptoInfo } from "./components/CurrCryptoInfo/CurrCryptoInfo";
import "./App.css"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CurrCryptoInfo />
      <Footer />
    </div>
  );
}

export default App;
