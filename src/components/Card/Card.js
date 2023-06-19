import React from 'react';
import add from 'date-fns/add';

import classes from './Card.module.scss';

export default function Card({price,carrier,segments}){

  const there = segments[0];
  const {origin: originThere, destination: destinationThere,date: dateThere,duration: durationThere, stops: stopsThere} = there;
  const dateStartThere = new Date(dateThere);
  const doneTimeThere = add(dateStartThere ,{
   years: 0,
   months: 0,
   weeks: 0,
   days: 0,
   hours:Math.trunc(durationThere/60),
   minutes:durationThere % 60,
   seconds:0
  });

  const doneTimeThereMin = doneTimeThere.getMinutes();
  const doneTimeThereHour = doneTimeThere.getHours();
  const startTimeThereMin =dateStartThere.getMinutes();
  const startTimeThereHour = dateStartThere.getHours();
  // console.log('DATADATADATADATADATADATADATADATA',dateThere)

  const getTimeFromMins = (mins)=> {
   const hours = Math.trunc(mins/60);
   const minutes = mins % 60;
   return `${hours  }ч ${  minutes  }м`;
};

  const back = segments[1];

  const {origin: originBack, destination: destinationBack,date: dateBack,duration: durationBack, stops: stopsBack} = back;


  const dateStartBack = new Date(dateBack);
  const doneTimeBack = add(dateStartBack ,{
   years: 0,
   months: 0,
   weeks: 0,
   days: 0,
   hours:Math.trunc(durationBack/60),
   minutes:durationBack % 60,
   seconds:0
  });

  const doneTimeBackMin = doneTimeBack.getMinutes();
  const doneTimeBackHour = doneTimeBack.getHours();
  const startTimeBackMin =dateStartBack.getMinutes();
  const startTimeBackHour = dateStartBack.getHours();
// console.log(there,back,'there back');

   return (
      <div className={classes.Card}>
      
         <header className={classes['header-Card']}>
            <bold className={classes['Card-price']}>{price}</bold>
            <img className={classes['Card-logo']} alt='logo' src={`//pics.avs.io/99/36/${carrier}.png`}/>
         </header>
         <div className={classes['inner-card-wrap']}>
            <div className={classes['Card-wrap']} >
               <div className={classes['Card-wrap-header']}>{originThere} - {destinationThere}</div>
               <div className={classes['Card-wrap-bottom']}> {`${startTimeThereHour}:${startTimeThereMin} - ${ doneTimeThereHour  }:${  doneTimeThereMin}`}</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>В пути</div>
               <div className={classes['Card-wrap-bottom']}> {getTimeFromMins(durationThere)}</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>{stopsThere.length} пересадки</div>
               <div className={classes['Card-wrap-bottom']}>{stopsThere.length ? stopsThere.join(' , '):'-'}</div>
            </div>
         </div>

         <div className={classes['inner-card-wrap']}>
            <div className={classes['Card-wrap']} >
               <div className={classes['Card-wrap-header']}>{originBack} - {destinationBack}</div>
               <div className={classes['Card-wrap-bottom']}> {`${startTimeBackHour}:${startTimeBackMin} - ${ doneTimeBackHour  }:${  doneTimeBackMin}`}</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>В пути</div>
               <div className={classes['Card-wrap-bottom']}> {getTimeFromMins(durationBack)}</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>{stopsBack.length} пересадка</div>
               <div className={classes['Card-wrap-bottom']}>{stopsBack.length ? stopsBack.join(' , '):'-'}</div>
            </div>
         </div>

      </div>
   );
}