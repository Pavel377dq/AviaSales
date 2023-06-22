import React from 'react';
import add from 'date-fns/add';

import classes from './Card.module.scss';

export default function Card({ ticketProps }) {
    const { price, carrier, segments } = ticketProps;
    const {
        origin: originThere,
        destination: destinationThere,
        stops: stopsThere,
        duration: durationThere,
    } = segments[0];

    const { origin: originBack, destination: destinationBack, stops: stopsBack, duration: durationBack } = segments[1];

    const timePeriod = (segment) => {
        const there = segment;
        const { date: dateStart, duration: durationFlight } = there;
        const dateStartFormat = new Date(dateStart);
        const doneTime = add(dateStartFormat, {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: Math.trunc(durationFlight / 60),
            minutes: durationFlight % 60,
            seconds: 0,
        });

        const doneTimeMin = doneTime.getMinutes();
        const doneTimeHour = doneTime.getHours();
        const startTimeMin = dateStartFormat.getMinutes();
        const startTimeHour = dateStartFormat.getHours();

        return `${startTimeHour}:${startTimeMin} - ${doneTimeHour}:${doneTimeMin}`;
    };

    const getTimeFromMins = (mins) => {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return `${hours}ч ${minutes}м`;
    };

    // const back = segments[1];

    /* const {
        date: dateBack,
        duration: durationBack,
    } = back;

    const dateStartBack = new Date(dateBack);
    const doneTimeBack = add(dateStartBack, {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: Math.trunc(durationBack / 60),
        minutes: durationBack % 60,
        seconds: 0,
    });

    const doneTimeBackMin = doneTimeBack.getMinutes();
    const doneTimeBackHour = doneTimeBack.getHours();
    const startTimeBackMin = dateStartBack.getMinutes();
    const startTimeBackHour = dateStartBack.getHours();
*/
    return (
        <div className={classes.Card}>
            <header className={classes['header-Card']}>
                <bold className={classes['Card-price']}>{price} Р</bold>
                <img className={classes['Card-logo']} alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} />
            </header>
            <div className={classes['inner-card-wrap']}>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>
                        {originThere} - {destinationThere}
                    </div>
                    <div className={classes['Card-wrap-bottom']}> {timePeriod(segments[0])}</div>
                </div>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>В пути</div>
                    <div className={classes['Card-wrap-bottom']}> {getTimeFromMins(durationThere)}</div>
                </div>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>{stopsThere.length} пересадки</div>
                    <div className={classes['Card-wrap-bottom']}>
                        {stopsThere.length ? stopsThere.join(' , ') : '-'}
                    </div>
                </div>
            </div>

            <div className={classes['inner-card-wrap']}>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>
                        {originBack} - {destinationBack}
                    </div>
                    <div className={classes['Card-wrap-bottom']}> {timePeriod(segments[1])}</div>
                </div>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>В пути</div>
                    <div className={classes['Card-wrap-bottom']}> {getTimeFromMins(durationBack)}</div>
                </div>
                <div className={classes['Card-wrap']}>
                    <div className={classes['Card-wrap-header']}>{stopsBack.length} пересадка</div>
                    <div className={classes['Card-wrap-bottom']}>{stopsBack.length ? stopsBack.join(' , ') : '-'}</div>
                </div>
            </div>
        </div>
    );
}
