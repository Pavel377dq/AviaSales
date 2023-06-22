import api from '../Api/Api';

export const initData = (data, isStop) => ({ type: 'initData', data, stop: isStop });

export const changeSortTag = (name) => ({ type: 'CHANGE_SORT_TAG', name });

export const showMoreTickets = () => ({ type: 'INC_VISIBLE_TICKETS_AMOUNT' });

export const toggleCheckboxes = (value) => ({ type: 'TOGGLE_CHECKBOX', value });

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
        if(error.message !== 'Network Error'){
            dispatch(initData([]));
        }
    }
};
