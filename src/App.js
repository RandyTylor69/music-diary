import "./App.css";
import React from "react";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";
import Greeting from "./components/Greeting.tsx";
import Update from "./components/Update.tsx";

function App() {

  // fecthing data from api

  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
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
