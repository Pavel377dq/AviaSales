/* eslint-disable react-hooks/exhaustive-deps */

import Tickets from '../Tickets/Tickets';
import Navigation from '../Navigation/Navigation';
import Filters from '../Filters/Filters';

import logoAviaSales from './imgLogo/AviaSalesLogo.png';
import classes from './App.module.scss';

export default function App() {
    return (
        <div className="App">
            <img className={classes.logo} src={logoAviaSales} alt="Логотип компаниии aviasales" />
            <div className={classes['App-wrap']}>
                <Filters />
                <div>
                    <Navigation />
                    <Tickets />
                </div>
            </div>
        </div>
    );
}
