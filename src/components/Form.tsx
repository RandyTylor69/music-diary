export default function Form(props:any){
    return(
        <>
            <form>
            <input placeholder="Piece Name" />
            <input placeholder="Artist Name" />
            <input placeholder="Finished Date" />
            <button>Log to the diary</button>
        </form>

        <div className="overlay"></div>
        </>
        
    )
}