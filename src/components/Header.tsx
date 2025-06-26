export default function Header(props:any) {
  return (
    <header className="web-header">
      <div className="header-container">

          <h1>Music Diary</h1>

        <section className="user">
          <h2>USER</h2>
          <h2>SHEETS</h2>
          <h2>LISTS</h2>
          <button onClick={props.displayForm}>+LOG</button>
        </section>
      </div>
    </header>
  );
}
