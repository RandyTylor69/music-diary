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
              Good job! You have played {props.cards.length} pieces of music of your goal of 5.
              Right-click the cards to remove them from the list.
            </p>
            <p>progress report: {props.cards.length / 5 * 100}%</p>
          </div>
        </div>
      </article>

      <article className="want-to-play">
        <h3>WANT TO PLAY</h3>
        <p>
          You haven't set any new pieces you want to play yet. <br></br>
          <span>Do it here!</span>
        </p>
      </article>

      <article className="sheet-music-folder">
        <h3>SHEET MUSIC FOLDER</h3>
        <div>
          <p>3 Debussy</p>
          <p>1 Bach</p>
          <p>1 Mozart</p>
        </div>
      </article>

      <article className="sheet-music-folder">
        <h3>Click the log button on the upper right corner?</h3>
      </article>

    </section>
  );
}
