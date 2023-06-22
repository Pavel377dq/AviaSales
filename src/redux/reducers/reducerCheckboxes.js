/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */


export const reducerCheckboxes = (
    state = {
        arr: [
            { checkBox: 'all', isChecked: false },
            { checkBox: 'NoTransfer', isChecked: true, id: 0 },
            { checkBox: 'TransferOne', isChecked: false, id: 1 },
            { checkBox: 'TransferTwo', isChecked: false, id: 2 },
            { checkBox: 'TransferThree', isChecked: false, id: 3 },
        ],
    },
    action
) => {
    const toggle = (stateToChange, index) => {
        const newStateArr = [...stateToChange.arr];
        newStateArr[index].isChecked = !newStateArr[index].isChecked; 

        const isAllOn = newStateArr.every((checkBox, idx) => {
            if (idx === 0) {
                return true;
            }
            return checkBox.isChecked;
        });

        newStateArr[0].isChecked = isAllOn;

        return { arr: newStateArr };
    };

    switch (action.type) {
        case 'TOGGLE_CHECKBOX': {
            if (action.value === 'all') {
                let newArr;
                if (state.arr[0].isChecked) {
                    newArr = state.arr.map((checkbox) => ({
                        ...checkbox,
                        isChecked: false,
                    }));
                } else {
                    newArr = state.arr.map((checkbox) => ({
                        ...checkbox,
                        isChecked: true,
                    }));
                }

                return { arr: newArr };
            } else if (action.value === 'noTransfer') {
                return toggle(state, 1);
            } else if (action.value === 'oneTransfer') {
                return toggle(state, 2);
            } else if (action.value === 'twoTransfers') {
                return toggle(state, 3);
            } else if (action.value === 'threeTransfers') {
                return toggle(state, 4);
            }

            return {
                ...state,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
