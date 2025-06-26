export default function Form(props: any) {
  return (
    <>
      <form action={props.handleSubmit} className="log-form">
        <div className="form-header">
          <h2 onClick={props.toggleForm}>X</h2>
        </div>
        <input placeholder="Piece Name" name="pieceName" required/>
        <input placeholder="Artist Name" name="artistName" required/>
        <input placeholder="Finish Date (month / year)" name="finishDate" required/>
        <button type="submit">Log to the diary</button>
      </form>

      <div className="overlay"></div>
    </>
  );
}
