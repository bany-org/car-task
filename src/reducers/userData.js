import { UPDATE_CASH_AMOUNT, ADD_CASH } from "../constants/ActionTypes";

const initialState = {
    cash: 200,
    name: "Jakub Banasiak",
};

export default function userData(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CASH_AMOUNT:
            return { ...state, cash: action.cash };

        case ADD_CASH:
            return { ...state, cash: state.cash + 100 };

        default:
            return state;
    }
}
