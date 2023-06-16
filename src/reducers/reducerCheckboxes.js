

export const  reducerCheckboxes = (state =  {arr:[
   {checkBox:'all', isChecked: false},{checkBox:'NoTransfer', isChecked: false},
   {checkBox:'TransferOne', isChecked: false},
   {checkBox:'TransferTwo', isChecked: false},
   {checkBox:'TransferThree', isChecked: false}]}, action) =>{
      console.log('ok')
   
   //reducer должен вернуть новый стейт?
      switch(action.type){
   
         case 'markAllOn': {
            console.log('1')
               const newStateArr = state.arr.map((checkbox)=>{
   
                  return {
                     ...checkbox,
                     isChecked: true
                  }
               });
               return {arr:newStateArr};
         }
         case 'markAllOff':{
            console.log('2')
            const newStateArr = state.arr.map((checkbox)=>{
   
               return {
                  ...checkbox,
                  isChecked: false
               }
            });
            return {arr:newStateArr};
            
         }
         case 'markNoTransferOn':{
        
               
            const newStateArr = [...state.arr];
            newStateArr[1].isChecked = true;
           
   
            let isAllOn = newStateArr.every((checkBox,idx)=>{ if(idx===0){
               return true;
            }
            return checkBox.isChecked;
         })
   
   
            newStateArr[0].isChecked = isAllOn;
            
            return {arr: newStateArr};
             
         }
   
         case 'markNoTransferOff':{
            
            
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked: state.arr[0].isChecked;
            newStateArr[1].isChecked = false;
   
            return {arr:newStateArr};
         }
             
         case 'markOneTransferOn': {
                 
            const newStateArr = [...state.arr];
            newStateArr[2].isChecked = true;
           
   
            let isAllOn = newStateArr.every((checkBox,idx)=>{ if(idx===0){
               return true;
            }
            return checkBox.isChecked;
         })
   
   
            newStateArr[0].isChecked = isAllOn;
            
            return {arr: newStateArr};
      }
         case 'markOneTransferOff':{
         
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked: state.arr[0].isChecked;
            newStateArr[2].isChecked = false;
   
            return {arr:newStateArr};
             
         }
         case 'markTransferTwoOn':{
                 
            const newStateArr = [...state.arr];
            newStateArr[3].isChecked = true;
           
   
            let isAllOn = newStateArr.every((checkBox,idx)=>{ if(idx===0){
               return true;
            }
            return checkBox.isChecked;
         })
   
   
            newStateArr[0].isChecked = isAllOn;
            
            return {arr: newStateArr};
            
         }
         case 'markTransferTwoOff':{
            
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked: state.arr[0].isChecked;
            newStateArr[3].isChecked = false;
   
            return {arr:newStateArr};
   
         }
         case 'markTransferThreeOn':{
                
            const newStateArr = [...state.arr];
            newStateArr[4].isChecked = true;
           
   
            let isAllOn = newStateArr.every((checkBox,idx)=>{ if(idx===0){
               return true;
            }
            return checkBox.isChecked;
         })
   
   
            newStateArr[0].isChecked = isAllOn;
            
            return {arr: newStateArr};
            
         }
         case 'markTransferThreeOff':{
       
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked: state.arr[0].isChecked;
            newStateArr[4].isChecked = false;
   
            return {arr:newStateArr};
   
         }
         default: {
            console.log('default');
            return {
              ...state
            }
         }
      }
   }
   
   