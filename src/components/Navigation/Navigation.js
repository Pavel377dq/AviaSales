import React from "react";
import classes from "./Navigation.module.scss"

export default function Navigation(){


   return (
      <nav>
         <div className={classes['Nav-wrap']}>
            <div className={classes['Navigation__item']}>САМЫЙ БЫСТРЫЙ</div>
            <div className={classes['Navigation__item']}>САМЫЙ ДЕШЁВЫЙ</div>
            <div className={classes['Navigation__item']}>ОПТИМАЛЬНЫЙ</div>
         </div>
      </nav>
   )

}