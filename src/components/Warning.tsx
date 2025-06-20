export default function Warning(props:any) {
  return (
    <>
      <div className="warning">
        <h2>
          You can have atmost 5 sheet music on display! <br></br>
          Right-click on a card to remove it.
        </h2>
        <button onClick={props.toggleWarning}>Alrighty</button>
      </div>
      <div className="overlay"></div>
    </>
  );
}
