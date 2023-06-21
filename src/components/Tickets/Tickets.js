/* eslint-disable spaced-comment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
//import lodash from 'lodash';

import Card from '../Card/Card';
import { showMoreTickets } from '../../actions';

import classes from './Tickets.module.scss';

let i=0;
export default function Tickets({ data }) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.checkboxes.arr);

    const sortTag = useSelector((state) => state.sort.sortTag);
    const amount = useSelector((state) => state.tickets.amount);

    const [progress, setProgress] = react.useState(0);

    react.useEffect(() => {
        setProgress(data.length / 95.55);
    }, [data]);

    const tickets = Object.assign([], data);

    const filterTickets = () => {
        const CheckedFilters = filters.filter((item) => item.isChecked);
        const filteredTickets = [];
       // let prevSet = [];
       
        for (let i = 0; i < CheckedFilters.length; i += 1) {
            const notChecked = tickets.filter((ticket) => ticket.segments[0].stops.length === CheckedFilters[i].id);
           
            filteredTickets.push(...notChecked);
          
        }

        return  filteredTickets;
    };

    let sortTickets;
    if (sortTag === 'cheapest') {
        sortTickets = filterTickets().sort((a, b) => a.price - b.price);
    } else if (sortTag === 'fastest') {
        sortTickets = filterTickets().sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    } else if (sortTag === 'optimal') {
        sortTickets = filterTickets().sort((a, b) => {
            if (a.segments[0].duration === b.segments[0].duration) {
                return a.price - b.price;
            }
            return a.segments[0].duration - b.segments[0].duration;
        });
    } else {
        sortTickets = filterTickets();
    }

    const showTicketsList = (sortTickets, amount) => {
        const portion = sortTickets.slice(0, amount);
        i+=1;
        return portion.map((ticket) => {
            const key = `${ticket.price}${ticket.carrier}${ticket.segments[0].date}${ticket.segments[1].date}aaaa${i}`;
            return <Card {...ticket} key={key} />;
        });
    };

    const ticketsToShow = showTicketsList(sortTickets, amount);
    const CheckedFilters = filters.filter((item) => item.isChecked);
    return (
        <div>
            {CheckedFilters.length? ticketsToShow: <div>Рейсов, подходящих под заданные фильтры, не найдено</div> }
            {ticketsToShow.length?<button className={classes['open-button']} type="button" onClick={() => dispatch(showMoreTickets())}>
                Показать ещё 5 билетов
            </button>: null}
            <LoadingBar color="#2196F3" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
        </div>
    );
}
