/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
            <div className={classes.filter}>
                <div className={classes['checkbox-wrap']}>
                    <input
                        type="checkbox"
                        checked={arr[0].isChecked}
                        className={classes['custom-checkbox']}
                        id="1"
                        name="happy"
                        value="yes"
                    />
                    <label
                        onKeyDown={arr[0].isChecked ? doAllOff : doAllOn}
                        onClick={arr[0].isChecked ? doAllOff : doAllOn}
                        htmlFor="1"
                    >
                        Все
                    </label>
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
                        value="yes"
                    />
                    <label
                        htmlFor="2"
                        onKeyDown={!arr[1].isChecked ? doNoTransferOn : doNoTransferOff}
                        onClick={!arr[1].isChecked ? doNoTransferOn : doNoTransferOff}
                    >
                        Без пересадок
                    </label>
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
                        value="yes"
                    />
                    <label
                        htmlFor="3"
                        onKeyDown={!arr[2].isChecked ? doOneTransferOn : doOneTransferOff}
                        onClick={!arr[2].isChecked ? doOneTransferOn : doOneTransferOff}
                    >
                        {' '}
                        1 пересадка
                    </label>
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
                        value="yes"
                    />
                    <label
                        htmlFor="4"
                        onKeyDown={!arr[3].isChecked ? doTransferTwoOn : doTransferTwoOff}
                        onClick={!arr[3].isChecked ? doTransferTwoOn : doTransferTwoOff}
                    >
                        2 пересадки
                    </label>
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
                        value="yes"
                    />
                    <label
                        htmlFor="5"
                        onKeyDown={!arr[4].isChecked ? doTransferThreeOn : doTransferThreeOff}
                        onClick={!arr[4].isChecked ? doTransferThreeOn : doTransferThreeOff}
                    >
                        {' '}
                        3 пересадки
                    </label>
                </div>
            </div>
        </aside>
    );
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(Filters);
