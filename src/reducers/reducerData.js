
export const reducerData = (state = { tickets: null}, action) =>{

   switch(action.type){
      case 'initData':{
        
         const newState = Object.assign({},state);
         newState.tickets = action.data;
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