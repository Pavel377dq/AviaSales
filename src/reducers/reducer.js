/* eslint-disable default-case */
/*const reducerSort = (state = 'nothing', action) => {



   switch(action.type){

      case 'all'://выполнить action вернуть состояние all итд, но как проверить что переданное состояние не all иначе цикл
       return 
      case 'noTransfer':
           return
      case 'transferOne':
         return
      case 'transferTwo':
         return
      case 'transferThree':
         return
   }
}*/


import { combineReducers } from 'redux'
import { reducerCheckboxes } from './reducerCheckboxes'
import { reducerData } from './reducerData'


export const reducer =  combineReducers({checkboxes:reducerCheckboxes, tickets: reducerData});