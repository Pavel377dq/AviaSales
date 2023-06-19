/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

export const reducerData = (state = { tickets: [], amount: 5, stop: false }, action) => {
    switch (action.type) {
        case 'initData': {
            const newState = { ...state };

            newState.tickets = [...newState.tickets, ...action.data];

            newState.stop = !action.stop;

            return newState;
        }
        case 'INC_VISIBLE_TICKETS_AMOUNT': {
            return {
                ...state,
                amount: state.amount + 5,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
