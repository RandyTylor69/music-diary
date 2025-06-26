// a section that contains: sheet challenges, currently playing...

export default function Update(props: any) {
  return (
    <section className="update">
      <article className="sheet-music-challenge">
        <h3>{new Date().getFullYear()} SHEET MUSIC CHALLENGE</h3>
        <div className="challenge-container">
          <div className="challenge-icon">
            <h3>{new Date().getFullYear()}</h3>
            <span className="material-symbols-outlined">piano</span>
          </div>
          <div className="para-container">
            <p>
              Good job! You have played {props.cards.length} pieces of music of
              your goal of 5. Right-click the cards to remove them from the
              list.
            </p>
            <p>progress report: {(props.cards.length / 5) * 100}%</p>
          </div>
        </div>
      </article>

      <article className="want-to-play">
        <h3>WANT TO PLAY</h3>
        {props.wtpPiece !== "" ? (
          <p>{props.wtpPiece} <br></br> <span onClick={props.WTPForm}>reset</span> / <span onClick={props.markComplete}>mark as complete</span></p>
        ) : (
          <p>
            You haven't set any new pieces you want to play yet. <br></br>
            <span onClick={props.WTPForm}>Do it here!</span>{" "}
          </p>
        )}
      </article>

      <article className="sheet-music-folder">
        <h3>YOUR TOP ARTISTS</h3>
        <div>
          {props.displayArtists}
        </div>
      </article>
    </section>
  );
}
