import * as types from "../constants/ActionTypes";

export const addCash = () => ({ type: types.ADD_CASH });

export const changeCarColor = (colorHexCode) => ({
    type: types.CHANGE_CAR_COLOR,
    colorHexCode,
});

export const buyCar = (car) => ({
    type: types.BUY_CAR,
    car,
});

export const updateCarsList = (carsList) => ({
    type: types.UPDATE_CARS_LIST,
    carsList,
});

export const updateEnginesList = (enginesList) => ({
    type: types.UPDATE_ENGINES_LIST,
    enginesList,
});

export const sellCar = () => ({
    type: types.SELL_CAR,
});

export const buyEngine = (model) => ({
    type: types.BUY_ENGINE,
    model,
});

export const buyGearbox = (model) => ({
    type: types.BUY_GEARBOX,
    model,
});

export const mountEngine = (model) => ({
    type: types.MOUNT_ENGINE,
    model,
});

export const mountGearbox = (model) => ({
    type: types.MOUNT_GEARBOX,
    model,
});

export const updateGearboxesList = (gearboxesList) => ({
    type: types.UPDATE_GEARBOXES_LIST,
    gearboxesList,
});

export const sellEngine = (model) => ({
    type: types.SELL_ENGINE,
    model,
});

export const sellGearbox = (model) => ({
    type: types.SELL_GEARBOX,
    model,
});
