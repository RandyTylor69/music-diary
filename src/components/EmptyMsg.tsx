export default function EmtpyMsg(props:any){
    return(
        <h1 className="emptyMsg">
            Add new sheet music <span onClick={props.toggleForm}>
             {`here`}
            </span>, 
            or by clicking the log button on your top right!
        </h1>
    )
}