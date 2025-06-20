import "./App.css";
import React from "react";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";
import Greeting from "./components/Greeting.tsx";
import Update from "./components/Update.tsx";
import Form from "./components/Form.tsx";


function App() {
  
  // hide form
  const [formDisplay, setFormDisplay] = React.useState(false)
  
  function displayForm(e){
    setFormDisplay(true)
  }
  return (
    <>
      
      {formDisplay&&<Form />}
      <Header displayForm = {displayForm}/>
      <Greeting />
      <section className="main-section">
        <Cards />
        <Update />
      </section>
    </>
  );
}

export default App;
