import React from "react";
import classes from "./Filters.module.scss"

export default function Filters(){


   return (

      <aside className={classes.filters}>
         <div className={classes['filters-header']}>Количество пересадок</div>
         <div className={classes['filter']}>
            <div className={classes['checkbox-wrap']}>
            <input type="checkbox" className={classes['custom-checkbox']} id="1" name="happy" value="yes"/>
            <label for="1"/></div>
               Все
         </div>
         <div className={classes['filter']}>
         <div className={classes['checkbox-wrap']}><input type="checkbox" className={classes['custom-checkbox']} id="2" name="happy" value="yes"/>
            <label for="2"/></div>
            Без пересадок
         </div>
         <div className={classes['filter']}>
         <div className={classes['checkbox-wrap']}><input type="checkbox" className={classes['custom-checkbox']} id="3" name="happy" value="yes"/>
            <label for="3"/></div>
            1 пересадка
         </div>
         <div className={classes['filter']}>
         <div className={classes['checkbox-wrap']}><input type="checkbox" className={classes['custom-checkbox']} id="4" name="happy" value="yes"/>
            <label for="4"/></div>
            2 пересадки
         </div>
         <div className={classes['filter']}>
         <div className={classes['checkbox-wrap']}> <input type="checkbox" className={classes['custom-checkbox']} id="5" name="happy" value="yes"/>
            <label for="5"/></div>
            3 пересадки
         </div>   
      </aside>
   );

}