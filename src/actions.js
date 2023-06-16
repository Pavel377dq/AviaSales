export const doAllOn = () => ( {type: 'markAllOn'});

export const doAllOff = () => ( {type: 'markAllOff'});

export const doNoTransferOn = () => ( { type: 'markNoTransferOn'});

export const doNoTransferOff = () => ( { type: 'markNoTransferOff'});

export const doOneTransferOn = () => ({ type: 'markOneTransferOn'});

export const doOneTransferOff = () => ({type:'markOneTransferOff'});

export const doTransferTwoOn = () => ({type: 'markTransferTwoOn'});

export const doTransferTwoOff = () => ({ type: 'markTransferTwoOff'});

export const doTransferThreeOff = () => ({ type: 'markTransferThreeOff'});

export const doTransferThreeOn = () => ({type: 'markTransferThreeOn'});

export const initData = (data,isStop) => ({type: 'initData', data: data, stop:isStop})

export const loadData =  () => {
   return async (dispatch)=>{
     try{
      const searchObj = await fetch('https://aviasales-test-api.kata.academy/search');
      
      
      const searchIdWrap = searchObj.json();
      console.log('searchIdWrap',searchIdWrap)
      const searchId = await searchIdWrap.then(res=>res.searchId);
      console.log('searchId',searchId)
      const dataRes = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

      const data = dataRes.json();
      console.log('dataRes.json()',data);
      const stop = await data.then(res=> res.stop);
      if(!stop){
      const tickets = await data.then(res=> res.tickets);
      //console.log('DATADATADATADATADATADATADATADATADATADATA',tickets)
      dispatch(initData(tickets,stop));
      }
      else{
         console.log('STOP',stop);
         dispatch(initData([],stop));
      }
   }
      catch(e){
         console.log(e,'Error');
         dispatch(initData([]));
      }
   
   }
}






