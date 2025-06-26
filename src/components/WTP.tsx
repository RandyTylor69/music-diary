export default function WTP(props: any) {
  return (
    <>
      <form action={props.toggleWTP} className="wtp-form">
        <div className="form-header">
          <h2 onClick={props.WTPForm}>X</h2>
        </div>
        <input name="wtpPiece" placeholder="Autumn Leaves" />
        <button type="submit">
          Set as my next piece
        </button>
      </form>
      <div className="overlay"></div>
    </>
  );
}
