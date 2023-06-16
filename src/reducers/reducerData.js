
export const reducerData = (state = { tickets: [],stop: false}, action) =>{

   switch(action.type){
      case 'initData':{
        
         const newState = Object.assign({},state);
         console.log('NEW  STEATE',newState)
         newState.tickets = [...newState.tickets,...action.data];
         console.log('newState.tickets',newState.tickets)

         newState.stop = !action.stop;
         console.log('newState.stop',newState.stop)
         return newState;
      }
      default: {
         console.log('default');
         return {
           ...state
         }
      }
   }
}