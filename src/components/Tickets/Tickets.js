/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

import Card from '../Card/Card';
import { showMoreTickets } from '../../actions';

import classes from './Tickets.module.scss';


export default function Tickets({data}){
   const dispatch = useDispatch();
   const filters =  useSelector((state) => 
      // console.log(state.checkboxes.arr,'useSelector state');
       state.checkboxes.arr
   );

   const sortTag = useSelector((state) => state.sort.sortTag);
   const amount = useSelector((state) => state.tickets.amount);

   const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(data.length / 95.55);
  }, [data]);


   const tickets = Object.assign([], data);

   const filterTickets = () => {
      const checkedFilters = filters.filter((item) => item.isChecked);
      const filteredTickets = [];
      for (let i = 0; i < checkedFilters.length; i+=1) {
        const arr = tickets.filter((ticket) => ticket.segments[0].stops.length === checkedFilters[i].id);
        filteredTickets.push(...arr);
      }
      return filteredTickets;
    };
  
   // console.log(arr,'data.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.ticketsdata.tickets')

   let sortTickets;
   if (sortTag === 'cheapest') {
    
     sortTickets = filterTickets().sort((a, b) => a.price - b.price);
   } else if (sortTag === 'fastest') {
 
     sortTickets = filterTickets().sort((a, b) => a.segments[0].duration - b.segments[0].duration);
   } else if (sortTag === 'optimal') {
    
     sortTickets = filterTickets().sort((a, b) => {
       if (a.segments[0].duration === b.segments[0].duration) {
         return a.price - b.price;
       }
       return a.segments[0].duration - b.segments[0].duration;
     });
   } else {
     sortTickets = filterTickets();
   }
 

   const showTicketsList = (sortTickets, amount) => {
      const portion = sortTickets.slice(0, amount);
      return portion.map((ticket) => {
        const key = `${ticket.price}${ticket.carrier}${ticket.segments[0].date}${ticket.segments[1].date}`;
        return <Card {...ticket} key={key}/>;
      });
    };
/*
const innerContent = sortTickets.map((ticket)=>{
   countTickets+=1;
   //console.log('countTickets',countTickets)
 //  const arr = Object.assign({}, ...ticket);
///console.log(ticket,'dataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicketdataOfTicket')
 //  const dataOfTicket = ticket;
   //console.log(dataOfTicket,'dataOfTicket')
   //console.log('TIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIKTIK',ticket)
   return(
      <Card key={countTickets}  {...ticket}/>
   )
}) */

// const slicedContent = innerContent.slice(0,5);

// console.log("TICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETSTICKETS",data.tickets)


   return (
      <div>
         
      {showTicketsList(sortTickets, amount)}
       <button className={classes['open-button'] } type="button" onClick={()=>dispatch(showMoreTickets())}>Показать ещё 5 билетов</button>
       <LoadingBar color="#2196F3" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
      </div>
   );
}