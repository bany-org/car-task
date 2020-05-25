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
    SELL_ENGINE,
    SELL_GEARBOX,
} from "../constants/ActionTypes";

import {
    CAR_TYPE_AVAILABLE_CONFIGURATION,
    ENGINE_POSSIBLE_GEARBOX,
} from "../config/Config";

import SpraySound from "../assets/SpraySound/SpraySound.mp3";
import PartsSound from "../assets/MountSound/MountSound.mp3";
import CashSound from "../assets/CashSound/CashSound.mp3";

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

function playPartsSound() {
    const audio = new Audio(PartsSound);
    audio.play();
}

function playCashSound() {
    const audio = new Audio(CashSound);
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

            playCashSound();

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
            updatedMarketCarsList.push(state.carData.carModel);
            let sellValue = state.carData.carModel.price - 100;

            if (state.mountedEngine) {
                updatedShopEnginesList.push(state.mountedEngine);
                sellValue += state.mountedEngine.price - 50;
            }

            if (state.mountedGearbox) {
                updatedShopGearboxesList.push(state.mountedGearbox);
                sellValue += state.mountedGearbox.price - 50;
            }

            playCashSound();

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
                shopGearboxesList: updatedShopGearboxesList,
                mountedEngine: null,
                mountedGearbox: null,
            };

        case SELL_ENGINE:
            const engineSellValue = action.model.price - 50;
            updatedUserEnginesList = updatedUserEnginesList.filter((obj) => {
                return obj.name !== action.model.name;
            });

            updatedShopEnginesList.push(action.model);

            playCashSound();

            return {
                ...state,
                resources: {
                    cash: state.resources.cash + engineSellValue,
                },
                userEnginesList: updatedUserEnginesList,
                shopEnginesList: updatedShopEnginesList,
            };

        case SELL_GEARBOX:
            const gearboxSellValue = action.model.price - 50;
            updatedUserGearboxesList = updatedUserGearboxesList.filter(
                (obj) => {
                    return obj.type !== action.model.type;
                }
            );

            updatedShopGearboxesList.push(action.model);

            playCashSound();

            return {
                ...state,
                resources: {
                    cash: state.resources.cash + gearboxSellValue,
                },
                userGearboxesList: updatedUserGearboxesList,
                shopGearboxesList: updatedShopGearboxesList,
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

            playCashSound();

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
            if (!state.carData.carModel) {
                return state;
            }

            const carType = state.carData.carModel.type;

            if (
                !CAR_TYPE_AVAILABLE_CONFIGURATION[carType].engine(
                    action.model.capacity
                )
            ) {
                return state;
            }

            if (state.mountedGearbox) {
                const mountedGearbox = state.mountedGearbox.type;
                const engineType = action.model.type;

                if (!ENGINE_POSSIBLE_GEARBOX[engineType](mountedGearbox)) {
                    return state;
                }
            }

            if (state.mountedEngine) {
                updatedUserEnginesList.push(state.mountedEngine);
            }

            updatedUserEnginesList = updatedUserEnginesList.filter((obj) => {
                return obj.name !== action.model.name;
            });

            playPartsSound();

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

            playCashSound();

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
            if (!state.carData.carModel || !state.mountedEngine) {
                return state;
            }

            const engineType = state.mountedEngine.type;

            if (!ENGINE_POSSIBLE_GEARBOX[engineType](action.model.type)) {
                return state;
            }

            if (state.mountedGearbox) {
                updatedUserGearboxesList.push(state.mountedGearbox);
            }

            updatedUserGearboxesList = updatedUserGearboxesList.filter(
                (obj) => {
                    return obj.type !== action.model.type;
                }
            );

            playPartsSound();

            return {
                ...state,
                mountedGearbox: action.model,
                userGearboxesList: updatedUserGearboxesList,
            };

        default:
            return state;
    }
}
