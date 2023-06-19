/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
import axios from 'axios';

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
    try {
        const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');

        const { searchId } = data;

        let flag = false;

        while (!flag) {
            const { data: dataOfTickets } = await axios
                .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
                .catch((error) => {
                    if (error.response.status === 500) {
                        return error.response;
                    }
                });

            const { tickets } = dataOfTickets;
            const { stop: dataLoadStop } = dataOfTickets;

            if (tickets !== undefined) {
                if (tickets.length && !dataLoadStop) {
                    dispatch(initData(tickets, dataLoadStop));
                    flag = dataLoadStop;
                } else {
                    flag = true;
                    dispatch(initData([], false));
                }
            } else {
                dispatch(initData([], false));
            }
        }
    } catch (e) {
        console.log(e);
    }
};
