/* eslint-disable react-hooks/exhaustive-deps */

import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import react, { useEffect } from 'react';

import Card from '../Card/Card';
import { loadData, showMoreTickets } from '../../redux/actions';
import * as selectors from '../../redux/selectors';

import classes from './Tickets.module.scss';

export default function Tickets() {
    const dispatch = useDispatch();
    const filters = useSelector(selectors.filters);

    const sortTag = useSelector(selectors.sortTag);
    const amount = useSelector(selectors.amount);
    const tickets = useSelector(selectors.tickets);

    const [progress, setProgress] = react.useState(0);

    useEffect(() => {
        dispatch(loadData());
        setProgress(tickets.length / 95.55);
    }, [tickets]);

    const filterTickets = () => {
        const CheckedFilters = filters.filter((item) => item.isChecked);
        const filteredTickets = [];

        for (let i = 0; i < CheckedFilters.length; i += 1) {
            const notChecked = tickets.filter((ticket) => ticket.segments[0].stops.length === CheckedFilters[i].id);

            filteredTickets.push(...notChecked);
        }

        return filteredTickets;
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

    const showTicketsList = (ticketsToPortion, limit) => {
        const portion = ticketsToPortion.slice(0, limit);
        return portion.map((ticket) => {
            const key = `${ticket.price}${ticket.carrier}${ticket.segments[0].date}${ticket.segments[1].date}`;
            return <Card ticketProps={ticket} key={key} />;
        });
    };

    const ticketsToShow = showTicketsList(sortTickets, amount);
    const CheckedFilters = filters.filter((item) => item.isChecked);
    return (
        <div>
            {CheckedFilters.length ? ticketsToShow : <div>Рейсов, подходящих под заданные фильтры, не найдено</div>}
            {ticketsToShow.length ? (
                <button className={classes['open-button']} type="button" onClick={() => dispatch(showMoreTickets())}>
                    Показать ещё 5 билетов
                </button>
            ) : null}
            <LoadingBar color="#2196F3" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
        </div>
    );
}
