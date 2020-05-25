export const getUserName = (state) => state.main.userData.name;
export const getUserCash = (state) => state.main.resources.cash;
export const getCarColor = (state) => state.main.carData.colorHexCode;
export const getCarsList = (state) => state.main.marketCarsList;
export const getMyCar = (state) => state.main.carData.carModel;
export const isGarageFull = (state) =>
    state.main.carData.carModel ? true : false;
export const getEnginesList = (state) => state.main.shopEnginesList;
export const getGearboxesList = (state) => state.main.shopGearboxesList;
export const getUserEnginesList = (state) => state.main.userEnginesList;
export const getMountedEngine = (state) => state.main.mountedEngine;
export const getUserGearboxes = (state) => state.main.userGearboxesList;
export const getMountedGearbox = (state) => state.main.mountedGearbox;
