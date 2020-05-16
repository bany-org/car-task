import {
    CHANGE_CAR_COLOR,
    ADD_CASH,
    BUY_CAR,
    UPDATE_CARS_LIST,
} from "../constants/ActionTypes";

import SpraySound from "../assets/SpraySound/SpraySound.mp3";

const initialState = {
    userData: {
        name: "John Doe",
    },
    resources: {
        cash: 500,
    },
    carData: {
        colorHexCode: "#000000",
        carModel: {},
    },
    carsList: [],
    myCarsList: [],
};

function playSpraySound() {
    const audio = new Audio(SpraySound);
    audio.play();
}

export default function main(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CAR_COLOR:
            if (
                state.resources.cash < 100 ||
                state.carData.colorHexCode === action.colorHexCode
            ) {
                return state;
            } else {
                playSpraySound();
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

        case BUY_CAR:
            if (state.resources.cash < action.car.price) {
                return state;
            }

            const updatedList = state.carsList.filter((obj) => {
                return obj.name !== action.car.name;
            });

            const myCars = [...state.myCarsList];
            myCars.push(action.car);

            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - action.car.price,
                },
                carData: {
                    ...state.carData,
                    carModel: action.car,
                },
                carsList: updatedList,
                myCarsList: myCars,
            };

        case UPDATE_CARS_LIST:
            return {
                ...state,
                carsList: action.carsList,
            };

        default:
            return state;
    }
}
