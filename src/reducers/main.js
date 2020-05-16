import {
    CHANGE_CAR_COLOR,
    ADD_CASH,
    BUY_CAR,
    UPDATE_CARS_LIST,
    SELL_CAR,
    UPDATE_ENGINES_LIST,
    BUY_ENGINE,
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
        carModel: null,
        engine: null,
        gearbox: null,
    },
    userEnginesList: [],
    carsList: [],
    enginesList: [],
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
                state.carData.carModel.color === action.colorHexCode.hex
            ) {
                return state;
            } else {
                playSpraySound();
            }

            return {
                ...state,
                carData: {
                    ...state.carData,
                    carModel: {
                        ...state.carData.carModel,
                        color: action.colorHexCode.hex,
                    },
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
            if (
                state.resources.cash < action.car.price ||
                state.carData.carModel
            ) {
                return state;
            }

            const updatedList = state.carsList.filter((obj) => {
                return obj.name !== action.car.name;
            });

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
            };

        case SELL_CAR:
            const updatedCarsList = [...state.carsList];
            updatedCarsList.push(state.carData.carModel);
            const sellValue = state.carData.carModel.price - 100;
            return {
                ...state,
                carData: {
                    carModel: null,
                },
                resources: {
                    cash: state.resources.cash + sellValue,
                },
                carsList: updatedCarsList,
            };

        case UPDATE_CARS_LIST:
            return {
                ...state,
                carsList: action.carsList,
            };

        case UPDATE_ENGINES_LIST:
            return {
                ...state,
                enginesList: action.enginesList,
            };

        case BUY_ENGINE:
            if (state.resources.cash < action.model.price) {
                return state;
            }

            const updatedEnginesList = state.enginesList.filter((obj) => {
                return obj.name !== action.model.name;
            });

            const userEnginesList = [...state.userEnginesList];
            userEnginesList.push(action.model);

            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - action.model.price,
                },
                userEnginesList: userEnginesList,
                enginesList: updatedEnginesList,
            };

        default:
            return state;
    }
}
