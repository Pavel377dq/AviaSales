/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

export const reducerData = (state = { tickets: [], amount: 5 }, action) => {
    switch (action.type) {
        case 'initData': {
            const newState = { ...state };

            newState.tickets = [...newState.tickets, ...action.data];

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
