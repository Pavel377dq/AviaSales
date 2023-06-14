const reducerSort = (state = 'nothing', action) => {



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
}

const reducerCheckbox = (state =  [
{checkBox:'all', isChecked: true},{checkBox:'NoTransfer', isChecked: false},
{checkBox:'TransferOne', isChecked: false},
{checkBox:'TransferTwo', isChecked: false},
{checkBox:'TransferThree', isChecked: false}], action) => {


//reducer должен вернуть новый стейт?
   switch(action.type){

      case 'markAll': {
         if(state[0].isChecked){//галочка стоит
            const newState = state.map((checkbox)=>{

               return {
                  ...checkbox,
                  isChecked: true
               }
            });
            return newState;
      }
      else{//галочки нет
         const newState = state.map((checkbox)=>{

            return {
               ...checkbox,
               isChecked: false
            }
         });
         return newState;
      }
      break;
      }//выполнить action вернуть состояние all итд, но как проверить что переданное состояние не all иначе цикл
       return 
      case 'markNoTransfer':{

         if(!state[1].isChecked){//возможно сделать еще зависимость от параметров вкл выкл НУЖНА ЗАВИСИМОСТЬ ИНАЧЕ НЕ ПОМЕНЯТЬ state!! Предыдущий стейт? настоящий стейт? прочитать
            
            const newState = [...state];
            newState[0].isChecked = false;
            return newState;
         }
         else{
            const newState = [...state];
            newState[1].isChecked = true;//запуститься ли здесь бесконечный цикл?
            return newState;
         }
         break;
      }
          
      case 'markTransferOne': {
      
      if(!state[2].isChecked){
            
         const newState = [...state];
         newState[0].isChecked = false;
         return newState;
      }
      else{
         const newState = [...state];
         newState[2].isChecked = true;//запуститься ли здесь бесконечный цикл?
         return newState;
      }
      break;
   }
      case 'markTransferTwo':{
      
            if(!state[3].isChecked){
                  
               const newState = [...state];
               newState[0].isChecked = false;
               return newState;
            }
            else{
               const newState = [...state];
               newState[3].isChecked = true;//запуститься ли здесь бесконечный цикл?
               return newState;
            }
            break;
         }
      case 'markTransferThree':{
      
         if(!state[4].isChecked){
               
            const newState = [...state];
            newState[0].isChecked = false;
            return newState;
         }
         else{
            const newState = [...state];
            newState[4].isChecked = true;//запуститься ли здесь бесконечный цикл?
            return newState;
         }
         break;
      }
   }
}

