/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

export const reducerData = (state = { tickets: [], amount: 5, stop: false}, action) =>{

   switch(action.type){
      case 'initData':{
        
         const newState = {...state};
        // console.log('NEW  STEATE',newState)
         newState.tickets = [...newState.tickets,...action.data];
        // console.log('newState.tickets',newState.tickets)

         newState.stop = !action.stop;
        // console.log('newState.stop',newState.stop)
         return newState;
      }
      case 'INC_VISIBLE_TICKETS_AMOUNT':{

         return {
            ...state,
            amount: state.amount + 5,
          };
      }
      default: {
       //  console.log('default');
         return {
           ...state
         };
      }
   }
};