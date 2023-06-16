import React from "react";
import Card from "../Card/Card";
import classes from "./Tickets.module.scss"
import { Spin } from "antd";

export default function Tickets({data,stop}){

   const arr = Object.assign([], data);
   //console.log(arr,'data.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.tickets')

const innerContent = arr.map((ticket)=>{
 //  const arr = Object.assign({}, ...ticket);
///console.log(ticket,'dataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicket')
 //  const dataOfTicket = ticket;
   //console.log(dataOfTicket,'dataOfTicket')
   //console.log('TIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIK',ticket)
   return(
      <Card {...ticket}/>
   )
})

//console.log("TICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETS",data.tickets)

console.log(stop, 'STOP IN TICKETS')
   return (
      <div>
         {stop?
      innerContent: <Spin/>}
       
      </div>
   )
}