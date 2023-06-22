/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
const initialState = {
    sortTag: 'fastest',
};

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SORT_TAG':
            return {
                ...state,
                sortTag: action.name,
            };
        default:
            return state;
    }
};
