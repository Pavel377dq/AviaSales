import React from "react"
import classes from "./Card.module.scss"
import logo from './S7Logo.svg'

export default function Card(){




   return (
      <div className={classes.Card}>
         <header className={classes['header-Card']}>
            <bold className={classes['Card-price']}>13 400</bold>
            <img className={classes['Card-logo']} src={logo}/>
         </header>
         <div className={classes['inner-card-wrap']}>
            <div className={classes['Card-wrap']} >
               <div className={classes['Card-wrap-header']}>MOW - HKT</div>
               <div className={classes['Card-wrap-bottom']}> 10:45 - 08:00</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>В пути</div>
               <div className={classes['Card-wrap-bottom']}> 13ч 30мин</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>2 пересадки</div>
               <div className={classes['Card-wrap-bottom']}>HKB, JNB</div>
            </div>
         </div>

         <div className={classes['inner-card-wrap']}>
            <div className={classes['Card-wrap']} >
               <div className={classes['Card-wrap-header']}>MSK - SPB</div>
               <div className={classes['Card-wrap-bottom']}> 10:45 - 11:10</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>В пути</div>
               <div className={classes['Card-wrap-bottom']}> 25мин</div>
            </div>
            <div className={classes['Card-wrap']}>
               <div className={classes['Card-wrap-header']}>1 пересадка</div>
               <div className={classes['Card-wrap-bottom']}>HKB</div>
            </div>
         </div>

      </div>
   )
}