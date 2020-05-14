import { CHANGE_ENGINE } from "../constants/ActionTypes";

const initialState = {
    carName: "Ford MR",
    type: "MR",
    color: {
        hexCode: "#0000FF",
    },
    engine: {
        name: "TURBO",
        code: 1,
    },
    gearBox: {
        name: "AUTOMATIC",
        code: 1,
    },
};

export default function carSet(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ENGINE:
            return { ...state, engine: action.engine };

        default:
            return state;
    }
}
