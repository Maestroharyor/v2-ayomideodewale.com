import { actionTypes } from './action';

export const initState = {
    opened: false,
};

interface Action {
    type: 'string'
}


function reducer(state = initState, action:Action) {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            // console.log(action)
            return {
                ...state,
                ...{ opened: true },
            };
        case actionTypes.CLOSE_MODAL:
            // console.log(action)
            return {
                ...state,
                ...{ opened: false },
            };
        default:
            return state;
    }
}

export default reducer;