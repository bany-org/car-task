import { CHANGE_CAR_COLOR, ADD_CASH } from "../constants/ActionTypes";

const initialState = {
    userData: {
        name: "John Doe",
    },
    resources: {
        cash: 500,
    },
    carData: {
        colorHexCode: "#000000",
    },
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CAR_COLOR:
            if (
                state.resources.cash < 100 ||
                state.carData.colorHexCode === action.colorHexCode
            ) {
                return state;
            }
            return {
                ...state,
                carData: {
                    ...state.carData,
                    colorHexCode: action.colorHexCode,
                },
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - 100,
                },
            };
        case ADD_CASH:
            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash + 100,
                },
            };

        default:
            return state;
    }
}
