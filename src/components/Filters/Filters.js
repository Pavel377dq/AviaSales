/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCheckboxes } from '../../redux/actions';
import * as selectors from '../../redux/selectors';

import classes from './Filters.module.scss';

export default function Filters() {
    const checkboxes = useSelector(selectors.checkboxes);
    const { arr } = checkboxes;
    const dispatch = useDispatch();

    const delegationHandler = (e) => {
        dispatch(toggleCheckboxes(e.target.value));
    };

    return (
        <aside onClick={delegationHandler} onKeyDown={delegationHandler} className={classes.filters}>
            <div className={classes['filters-header']}>Количество пересадок</div>
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[0].isChecked}
                        className={classes['custom-checkbox']}
                        id="1"
                        name="happy"
                        value="all"
                    />
                    <label htmlFor="1">Все</label>
                </div>
            </div>
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[1].isChecked}
                        className={classes['custom-checkbox']}
                        id="2"
                        name="happy"
                        value="noTransfer"
                    />
                    <label htmlFor="2">Без пересадок</label>
                </div>
            </div>
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[2].isChecked}
                        className={classes['custom-checkbox']}
                        id="3"
                        name="happy"
                        value="oneTransfer"
                    />
                    <label htmlFor="3"> 1 пересадка</label>
                </div>
            </div>
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[3].isChecked}
                        className={classes['custom-checkbox']}
                        id="4"
                        name="happy"
                        value="twoTransfers"
                    />
                    <label htmlFor="4">2 пересадки</label>
                </div>
            </div>
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    {' '}
                    <input
                        type="checkbox"
                        checked={arr[4].isChecked}
                        className={classes['custom-checkbox']}
                        id="5"
                        name="happy"
                        value="threeTransfers"
                    />
                    <label htmlFor="5"> 3 пересадки</label>
                </div>
            </div>
        </aside>
    );
}
