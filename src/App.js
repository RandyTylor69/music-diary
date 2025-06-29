import "./App.css";
import React from "react";
import Header from "./components/Header.tsx";
import Cards from "./components/Cards.tsx";
import Greeting from "./components/Greeting.tsx";
import Update from "./components/Update.tsx";
import Form from "./components/Form.tsx";
import { Colors } from "./Colors.js";
import Warning from "./components/Warning.tsx";
import EmtpyMsg from "./components/EmptyMsg.tsx";
import WTP from "./components/WTP.tsx";

function App() {
  const [formDisplay, setFormDisplay] = React.useState(false);
  const [cards, setCards] = React.useState([
    {
      pieceName: "Let You Break My Heart Again",
      artistName: "Laufey",
      finishDate: "March 2024",
    },
    {
      pieceName: "La Fille aux cheveau de lin",
      artistName: "Debussy",
      finishDate: "June 2024",
    },
    {
      pieceName: "Arabesque No.1 in E Major",
      artistName: "Debussy",
      finishDate: "April 2025",
    },
  ]);
  const [warning, setWarning] = React.useState(false);
  const [wantToPlay, setWantToPlay] = React.useState(false);
  const [wtpPiece, setWtpPiece] = React.useState("");

  // LOG - IN - FORM

  function displayForm() {
    if (cards.length === 5) {
      setWarning(true);
      return;
    } else {
      setFormDisplay(true);
    }
  }

  function toggleWarning() {
    setWarning(false);
  }

  function toggleForm() {
    setFormDisplay((prev) => !prev);
  }

  function handleSubmit(formData) {
    // create new card object
    const newCard = {
      pieceName: formData.get("pieceName"),
      artistName: formData.get("artistName"),
      finishDate: formData.get("finishDate"),
    };
    // adding card to the cards array
    setCards((prevArray) => [...prevArray, newCard]);

    // closing the form
    setFormDisplay(false);
  }

  function deleteCard(e, id) {
    e.preventDefault();
    const newCards = cards.filter((card) => cards.indexOf(card) != id);
    setCards(newCards);
  }

  const displayCards = cards.map((card, index) => {
    return (
      <article
        className="card"
        style={{ backgroundColor: Colors[index] }}
        onContextMenu={(e) => {
          deleteCard(e, index);
        }}
      >
        <header className="card-header">
          <h1>{card.pieceName}</h1>
          <button style={{ color: Colors[index] }}>Detail</button>
        </header>
        <div className="detail">
          <h3>{card.artistName}</h3>
          <h3>{card.finishDate}</h3>
        </div>
      </article>
    );
  });

  // update the want to play section
  function WTPForm() {
    // hides / displays the form
    setWantToPlay((prev) => !prev);
  }

  function toggleWTP(formData) {
    setWtpPiece(formData.get("wtpPiece"));
    setWantToPlay((prev) => !prev);
  }

  function markComplete() {
    setWtpPiece("");
  }

  // update Top Artists section

  const topArtists = [];

  cards.forEach((card) => {
    // find occurences
    const occurences = cards.filter(
      (item) => item.artistName === card.artistName
    ).length;
    if (!topArtists.some((item) => item.name === card.artistName)) {
      topArtists.push({
        name: card.artistName,
        count: occurences,
      });
    }
  });

  const displayArtists = topArtists.map((artist) => {
    return (
      <>
        <span>
          {artist.name} {`(${artist.count})`}
        </span>
        <br></br>
      </>
    );
  });

  return (
    <>
      {warning && <Warning toggleWarning={toggleWarning} />}
      {formDisplay && (
        <Form handleSubmit={handleSubmit} toggleForm={toggleForm} />
      )}
      {wantToPlay && <WTP toggleWTP={toggleWTP} WTPForm={WTPForm} />}
      <Header displayForm={displayForm} />
      <Greeting />

      {cards.length === 0 ? (
        <EmtpyMsg toggleForm={toggleForm} />
      ) : (
        <section className="main-section">
          <Cards displayCards={displayCards} deleteCard={deleteCard} />
          <Update
            cards={cards}
            displayArtists={displayArtists}
            WTPForm={WTPForm}
            toggleWTP={toggleWTP}
            wtpPiece={wtpPiece}
            markComplete={markComplete}
          />
        </section>
      )}
    </>
  );
}

export default App;
