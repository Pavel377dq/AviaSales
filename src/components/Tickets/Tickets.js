import React from "react";
import Card from "../Card/Card";
import classes from "./Tickets.module.scss"

export default function Tickets({data}){

   const arr = Object.assign([], data.tickets);
   //console.log(arr,'data.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.tickets')

const innerContent = arr.map((ticket)=>{
 //  const arr = Object.assign({}, ...ticket);
///console.log(ticket,'dataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicket')
 //  const dataOfTicket = ticket;
   //console.log(dataOfTicket,'dataOfTicket')
   console.log('TIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIK',ticket)
   return(
      <Card {...ticket}/>
   )
})

//console.log("TICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETS",data.tickets)

   return (
      <div>
      {innerContent}
       
      </div>
   )
}