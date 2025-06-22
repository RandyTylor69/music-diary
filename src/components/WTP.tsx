export default function WTP(props: any) {
  return (
    <>
      <form action={props.toggleWTP}>
        <input name="wtpPiece" placeholder="Autumn Leaves" />
        <button type="submit">
          Set as my next piece
        </button>
      </form>
      <div className="overlay"></div>
    </>
  );
}
