export default function Form(props:any){
    return(
        <>
            <form action={props.handleSubmit}>
            <input placeholder="Piece Name" name="pieceName"/>
            <input placeholder="Artist Name" name="artistName" />
            <input placeholder="Finish Date" name="finishDate (month/year)" />
            <button type="submit">Log to the diary</button>
        </form>

        <div className="overlay"></div>
        </>
        
    )
}