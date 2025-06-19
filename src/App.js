import "./App.css";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";
import Greeting from "./components/Greeting.tsx";
import Update from "./components/Update.tsx";

function App() {
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
