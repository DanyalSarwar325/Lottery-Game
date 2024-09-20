import TicketNum from "./TicketNum";


function Ticket({ticket}){
    return(
        <div className="outer">
            {ticket.map((itm,idx)=>(
                <TicketNum n={itm} key={idx}/>
            ))}
        </div>
    )
}
export default Ticket;