import classes from './App.module.scss';
import Tickets from '../Tickets/Tickets';
import Navigation from '../Navigation/Navigation';
import logoAviaSales from './imgLogo/AviaSalesLogo.png'
import Filters from '../Filters/Filters';

function App() {
  return (
    <div className="App">
      <img className={classes.logo} src={logoAviaSales} alt='Логотип компаниии aviasales' />
      <div className={classes['App-wrap']}>
        <Filters/>
        <div>
          <Navigation/>
          <Tickets/>
        </div>
      </div>
    </div>
  );
}

export default App;
