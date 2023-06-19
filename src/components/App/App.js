/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Tickets from '../Tickets/Tickets';
import Navigation from '../Navigation/Navigation';
import Filters from '../Filters/Filters';
import * as actions from '../../actions';

import logoAviaSales from './imgLogo/AviaSalesLogo.png';
import classes from './App.module.scss';

function App({ state, loadData }) {
    useEffect(() => {
        loadData();
    }, []);

    const { tickets } = state;
    const { stop } = tickets;

    return (
        <div className="App">
            <img className={classes.logo} src={logoAviaSales} alt="Логотип компаниии aviasales" />
            <div className={classes['App-wrap']}>
                <Filters />
                <div>
                    <Navigation />
                    <Tickets data={tickets.tickets} stop={stop} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(App);
