import "./App.css";
import React from "react";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";
import Greeting from "./components/Greeting.tsx";
import Update from "./components/Update.tsx";

function App() {
  

  // fecthing data from api

  async function getData(){
    const response = await fetch('http://localhost:3001/api/imslp?q=mozart')
    const data = await response.json()
    console.log(data)
  }

  getData()

  return (
    <>
      <Header />
      <Greeting />
      <section className="main-section">
        <Cards />
        <Update />
      </section>
    </>
  );
}

export default App;
