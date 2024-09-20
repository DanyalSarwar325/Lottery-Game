import Ticket from "./Ticket";
import { useState, } from "react";
import {generateTicket,predict} from './script.js'
import Button from "./Button.jsx";
import "./index.css"

function Game({n,winningSum}) {
  let [Lottery,setLottery]=useState(generateTicket(n));
 
  let outcome=predict(Lottery)==winningSum
 
 
  let win=outcome? " You Win ": "Try Again"

  let BuyTicket=(n)=>{
    setLottery(generateTicket(n))
  }
  return (
    <>
<Ticket ticket={Lottery}/>
<h1 className="result">{win}</h1>
<Button action={()=>
    BuyTicket(n)
}/>
</>
  );
}

export default Game;
