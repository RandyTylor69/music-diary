export default function Warning(props:any) {
  return (
    <>
      <div className="warning">
        <h2>
          You can have atmost 5 sheet music on display! <br></br>
          To add more, click "sheets" on the upper right corner.
        </h2>
        <button onClick={props.toggleWarning}>Alrighty</button>
      </div>
      <div className="overlay"></div>
    </>
  );
}
