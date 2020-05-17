import {
    CHANGE_CAR_COLOR,
    ADD_CASH,
    BUY_CAR,
    UPDATE_CARS_LIST,
    SELL_CAR,
    UPDATE_ENGINES_LIST,
    BUY_ENGINE,
    MOUNT_ENGINE,
    UPDATE_GEARBOXES_LIST,
    BUY_GEARBOX,
} from "../constants/ActionTypes";

import SpraySound from "../assets/SpraySound/SpraySound.mp3";

const initialState = {
    userData: {
        name: "John Doe",
    },
    resources: {
        cash: 1500,
    },
    carData: {
        carModel: null,
        engine: null,
        gearbox: null,
    },

    mountedEngine: null,
    userEnginesList: [],

    mountedGearbox: null,
    userGearboxesList: [],

    carsList: [],
    enginesList: [],
    gearboxesList: [],
};

function playSpraySound() {
    const audio = new Audio(SpraySound);
    audio.play();
}

export default function main(state = initialState, action) {
    let updatedEnginesList = [...state.enginesList];
    let updatedCarsList = [...state.carsList];
    let userEnginesList = [...state.userEnginesList];

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
            updatedCarsList = [...state.carsList];
            updatedCarsList.push(state.carData.carModel);
            const sellValue = state.carData.carModel.price - 100;

            updatedEnginesList = [...state.enginesList];

            if (state.mountedEngine) {
                updatedEnginesList.push(state.mountedEngine);
            }

            return {
                ...state,
                carData: {
                    carModel: null,
                },
                resources: {
                    cash: state.resources.cash + sellValue,
                },
                carsList: updatedCarsList,
                enginesList: updatedEnginesList,
                mountedEngine: null,
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

        case UPDATE_GEARBOXES_LIST:
            return {
                ...state,
                gearboxesList: action.gearboxesList,
            };

        case BUY_ENGINE:
            if (state.resources.cash < action.model.price) {
                return state;
            }

            updatedEnginesList = state.enginesList.filter((obj) => {
                return obj.name !== action.model.name;
            });

            userEnginesList = [...state.userEnginesList];
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

        case MOUNT_ENGINE:
            console.log(action.model);

            let userEngines = [...state.userEnginesList];

            if (state.mountedEngine) {
                userEngines.push(state.mountedEngine);
            }
            console.log("mount", action.model);

            const updatedUserEnginesList = userEngines.filter((obj) => {
                return obj.name !== action.model.name;
            });

            return {
                ...state,
                mountedEngine: action.model,
                userEnginesList: updatedUserEnginesList,
            };

        case BUY_GEARBOX:
            if (state.resources.cash < action.model.price) {
                return state;
            }

            const updatedGearboxesList = state.gearboxesList.filter((obj) => {
                return obj.type !== action.model.type;
            });

            const userGearboxesList = [...state.userGearboxesList];
            userGearboxesList.push(action.model);

            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - action.model.price,
                },
                userGearboxesList: userGearboxesList,
                gearboxesList: updatedGearboxesList,
            };

        default:
            return state;
    }
}
