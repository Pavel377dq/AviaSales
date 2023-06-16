import classes from './App.module.scss';
import Tickets from '../Tickets/Tickets';
import Navigation from '../Navigation/Navigation';
import logoAviaSales from './imgLogo/AviaSalesLogo.png'
import Filters from '../Filters/Filters';
import { useEffect } from 'react';
import * as actions from '../../actions'
import { connect } from "react-redux";

function App({state,loadData}) {

  useEffect(()=>loadData(),[]);

  const {tickets} = state;
  const {stop} = tickets;
  console.log(tickets.tickets,'tickets')
  console.log(state,'STATE APP')

  return (
    <div className="App">
      <img className={classes.logo} src={logoAviaSales} alt='Логотип компаниии aviasales' />
      <div className={classes['App-wrap']}>
        <Filters/>
        <div>
          <Navigation/>
          <Tickets data={tickets.tickets} stop={stop}/>
          <button className={classes['toggle-button']}>Показать ещё 5 билетов</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{

  return {state:state}
  
}

export default connect(mapStateToProps,actions)(App);