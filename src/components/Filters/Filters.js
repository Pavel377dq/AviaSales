/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Filters.module.scss';

function Filters({
    state,
    doAllOn,

    doAllOff,

    doNoTransferOn,

    doNoTransferOff,

    doOneTransferOn,

    doOneTransferOff,

    doTransferTwoOn,

    doTransferTwoOff,

    doTransferThreeOff,
    doTransferThreeOn,
}) {
    const { checkboxes } = state;
    const { arr } = checkboxes;

    return (
        <aside className={classes.filters}>
            <div className={classes['filters-header']}>Количество пересадок</div>
            <div
                onKeyDown={arr[0].isChecked ? doAllOff : doAllOn}
                onClick={arr[0].isChecked ? doAllOff : doAllOn}
                className={classes.filter}
            >
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[0].isChecked}
                        className={classes['custom-checkbox']}
                        id="1"
                        name="happy"
                        value="yes"
                    />
                    <label htmlFor="1" />
                </div>
                Все
            </div>
            <div
                onKeyDown={!arr[1].isChecked ? doNoTransferOn : doNoTransferOff}
                onClick={!arr[1].isChecked ? doNoTransferOn : doNoTransferOff}
                className={classes.filter}
            >
                <div className={classes['checkbox-wrap']}>
                    <input
                        onChange={!arr[1].isChecked ? doNoTransferOn : doNoTransferOff}
                        type="checkbox"
                        checked={arr[1].isChecked}
                        className={classes['custom-checkbox']}
                        id="2"
                        name="happy"
                        value="yes"
                    />
                    <label htmlFor="2" />
                </div>
                Без пересадок
            </div>
            <div
                onKeyDown={!arr[2].isChecked ? doOneTransferOn : doOneTransferOff}
                onClick={!arr[2].isChecked ? doOneTransferOn : doOneTransferOff}
                className={classes.filter}
            >
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[2].isChecked}
                        className={classes['custom-checkbox']}
                        id="3"
                        name="happy"
                        value="yes"
                    />
                    <label htmlFor="3" />
                </div>
                1 пересадка
            </div>
            <div
                onKeyDown={!arr[3].isChecked ? doTransferTwoOn : doTransferTwoOff}
                onClick={!arr[3].isChecked ? doTransferTwoOn : doTransferTwoOff}
                className={classes.filter}
            >
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[3].isChecked}
                        className={classes['custom-checkbox']}
                        id="4"
                        name="happy"
                        value="yes"
                    />
                    <label htmlFor="4" />
                </div>
                2 пересадки
            </div>
            <div
                onKeyDown={!arr[4].isChecked ? doTransferThreeOn : doTransferThreeOff}
                className={classes.filter}
                onClick={!arr[4].isChecked ? doTransferThreeOn : doTransferThreeOff}
            >
                <div className={classes['checkbox-wrap']}>
                    {' '}
                    <input
                        type="checkbox"
                        checked={arr[4].isChecked}
                        className={classes['custom-checkbox']}
                        id="5"
                        name="happy"
                        value="yes"
                    />
                    <label htmlFor="5" />
                </div>
                3 пересадки
            </div>
        </aside>
    );
}
// <div>{JSON.stringify(state.data)}</div>
const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(Filters);
