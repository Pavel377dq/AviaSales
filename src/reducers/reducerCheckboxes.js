/* eslint-disable default-param-last */

// eslint-disable-next-line import/prefer-default-export
export const reducerCheckboxes = (
    state = {
        arr: [
            { checkBox: 'all', isChecked: true },
            { checkBox: 'NoTransfer', isChecked: true, id: 0 },
            { checkBox: 'TransferOne', isChecked: true, id: 1 },
            { checkBox: 'TransferTwo', isChecked: true, id: 2 },
            { checkBox: 'TransferThree', isChecked: true, id: 3 },
        ],
    },
    action
) => {
    switch (action.type) {
        case 'markAllOn': {
            const newStateArr = state.arr.map((checkbox) => ({
                ...checkbox,
                isChecked: true,
            }));
            return { arr: newStateArr };
        }
        case 'markAllOff': {
            const newStateArr = state.arr.map((checkbox) => ({
                ...checkbox,
                isChecked: false,
            }));
            return { arr: newStateArr };
        }
        case 'markNoTransferOn': {
            const newStateArr = [...state.arr];
            newStateArr[1].isChecked = true;

            const isAllOn = newStateArr.every((checkBox, idx) => {
                if (idx === 0) {
                    return true;
                }
                return checkBox.isChecked;
            });

            newStateArr[0].isChecked = isAllOn;

            return { arr: newStateArr };
        }

        case 'markNoTransferOff': {
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked : state.arr[0].isChecked;
            newStateArr[1].isChecked = false;

            return { arr: newStateArr };
        }

        case 'markOneTransferOn': {
            const newStateArr = [...state.arr];
            newStateArr[2].isChecked = true;

            const isAllOn = newStateArr.every((checkBox, idx) => {
                if (idx === 0) {
                    return true;
                }
                return checkBox.isChecked;
            });

            newStateArr[0].isChecked = isAllOn;

            return { arr: newStateArr };
        }
        case 'markOneTransferOff': {
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked : state.arr[0].isChecked;
            newStateArr[2].isChecked = false;

            return { arr: newStateArr };
        }
        case 'markTransferTwoOn': {
            const newStateArr = [...state.arr];
            newStateArr[3].isChecked = true;

            const isAllOn = newStateArr.every((checkBox, idx) => {
                if (idx === 0) {
                    return true;
                }
                return checkBox.isChecked;
            });

            newStateArr[0].isChecked = isAllOn;

            return { arr: newStateArr };
        }
        case 'markTransferTwoOff': {
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked : state.arr[0].isChecked;
            newStateArr[3].isChecked = false;

            return { arr: newStateArr };
        }
        case 'markTransferThreeOn': {
            const newStateArr = [...state.arr];
            newStateArr[4].isChecked = true;

            const isAllOn = newStateArr.every((checkBox, idx) => {
                if (idx === 0) {
                    return true;
                }
                return checkBox.isChecked;
            });

            newStateArr[0].isChecked = isAllOn;

            return { arr: newStateArr };
        }
        case 'markTransferThreeOff': {
            const newStateArr = [...state.arr];
            newStateArr[0].isChecked = state.arr[0].isChecked ? !state.arr[0].isChecked : state.arr[0].isChecked;
            newStateArr[4].isChecked = false;

            return { arr: newStateArr };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
