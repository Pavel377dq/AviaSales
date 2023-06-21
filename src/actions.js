/* eslint-disable no-console */

import api from './Api/Api';

export const doAllOn = () => ({ type: 'markAllOn' });

export const doAllOff = () => ({ type: 'markAllOff' });

export const doNoTransferOn = () => ({ type: 'markNoTransferOn' });

export const doNoTransferOff = () => ({ type: 'markNoTransferOff' });

export const doOneTransferOn = () => ({ type: 'markOneTransferOn' });

export const doOneTransferOff = () => ({ type: 'markOneTransferOff' });

export const doTransferTwoOn = () => ({ type: 'markTransferTwoOn' });

export const doTransferTwoOff = () => ({ type: 'markTransferTwoOff' });

export const doTransferThreeOff = () => ({ type: 'markTransferThreeOff' });

export const doTransferThreeOn = () => ({ type: 'markTransferThreeOn' });

export const initData = (data, isStop) => ({ type: 'initData', data, stop: isStop });

export const changeSortTag = (name) => ({ type: 'CHANGE_SORT_TAG', name });

export const showMoreTickets = () => ({ type: 'INC_VISIBLE_TICKETS_AMOUNT' });

export const loadData = () => async (dispatch) => {
    if (api.searchId === '') {
        await api.getId();
    }

    try {
        const { tickets, dataLoadStop } = await api.getTickets();

        if (tickets.length && !dataLoadStop) {
            dispatch(initData(tickets));
        }
    } catch (error) {
        console.log('In error handler ', error.message);
        dispatch(initData([]));
    }
};
