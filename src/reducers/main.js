import {
    UPDATE_CARS_LIST,
    UPDATE_ENGINES_LIST,
    UPDATE_GEARBOXES_LIST,
    CHANGE_CAR_COLOR,
    ADD_CASH,
    BUY_CAR,
    SELL_CAR,
    BUY_ENGINE,
    MOUNT_ENGINE,
    BUY_GEARBOX,
    MOUNT_GEARBOX,
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
    },

    mountedEngine: null,
    userEnginesList: [],

    mountedGearbox: null,
    userGearboxesList: [],

    marketCarsList: [],
    shopEnginesList: [],
    shopGearboxesList: [],
};

function playSpraySound() {
    const audio = new Audio(SpraySound);
    audio.play();
}

export default function main(state = initialState, action) {
    let updatedMarketCarsList = [...state.marketCarsList];

    let updatedUserEnginesList = [...state.userEnginesList];
    let updatedShopEnginesList = [...state.shopEnginesList];

    let updatedUserGearboxesList = [...state.userGearboxesList];
    let updatedShopGearboxesList = [...state.shopGearboxesList];

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

            updatedMarketCarsList = state.marketCarsList.filter((obj) => {
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
                marketCarsList: updatedMarketCarsList,
            };

        case SELL_CAR:
            console.log("sell car", state.marketCarsList);

            updatedMarketCarsList.push(state.carData.carModel);
            const sellValue = state.carData.carModel.price - 100;

            if (state.mountedEngine) {
                updatedShopEnginesList.push(state.mountedEngine);
            }

            return {
                ...state,
                carData: {
                    carModel: null,
                },
                resources: {
                    cash: state.resources.cash + sellValue,
                },
                marketCarsList: updatedMarketCarsList,
                shopEnginesList: updatedShopEnginesList,
                mountedEngine: null,
            };

        case UPDATE_CARS_LIST:
            return {
                ...state,
                marketCarsList: action.carsList,
            };

        case UPDATE_ENGINES_LIST:
            return {
                ...state,
                shopEnginesList: action.enginesList,
            };

        case UPDATE_GEARBOXES_LIST:
            return {
                ...state,
                shopGearboxesList: action.gearboxesList,
            };

        case BUY_ENGINE:
            if (state.resources.cash < action.model.price) {
                return state;
            }

            updatedShopEnginesList = state.shopEnginesList.filter((obj) => {
                return obj.name !== action.model.name;
            });

            updatedUserEnginesList.push(action.model);

            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - action.model.price,
                },
                userEnginesList: updatedUserEnginesList,
                shopEnginesList: updatedShopEnginesList,
            };

        case MOUNT_ENGINE:
            if (state.mountedEngine) {
                updatedUserEnginesList.push(state.mountedEngine);
            }

            updatedUserEnginesList = updatedUserEnginesList.filter((obj) => {
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

            updatedShopGearboxesList = state.shopGearboxesList.filter((obj) => {
                return obj.type !== action.model.type;
            });

            updatedUserGearboxesList.push(action.model);

            return {
                ...state,
                resources: {
                    ...state.resources,
                    cash: state.resources.cash - action.model.price,
                },
                userGearboxesList: updatedUserGearboxesList,
                shopGearboxesList: updatedShopGearboxesList,
            };

        case MOUNT_GEARBOX:
            if (state.mountedGearbox) {
                updatedUserGearboxesList.push(state.mountedGearbox);
            }

            updatedUserGearboxesList = updatedUserGearboxesList.filter(
                (obj) => {
                    return obj.type !== action.model.type;
                }
            );

            return {
                ...state,
                mountedGearbox: action.model,
                userGearboxesList: updatedUserGearboxesList,
            };

        default:
            return state;
    }
}
