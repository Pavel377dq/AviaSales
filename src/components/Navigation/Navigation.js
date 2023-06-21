/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSortTag } from '../../actions';

import classes from './Navigation.module.scss';

export default function Navigation() {
    const dispatch = useDispatch();
    const sortTag = useSelector((state) => state.sort.sortTag);

    const onSortTagChange = (event) => {
        dispatch(changeSortTag(event.target.value));
    };

    return (
        <nav>
            <div className={classes.sort} onChange={onSortTagChange}>
                <label className={sortTag === 'cheapest' ? classes.checked : null}>
                    <input type="checkbox" value="cheapest" name="tickets" />
                    <span>САМЫЙ ДЕШЕВЫЙ</span>
                </label>
                <label className={sortTag === 'fastest' ? classes.checked : null}>
                    <input type="checkbox" value="fastest" name="tickets" />
                    <span>САМЫЙ БЫСТРЫЙ</span>
                </label>
                <label className={sortTag === 'optimal' ? classes.checked : null}>
                    <input type="checkbox" value="optimal" name="tickets" />
                    <span>ОПТИМАЛЬНЫЙ</span>
                </label>
            </div>
        </nav>
    );
}
