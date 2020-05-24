const CAR_TYPES = {
    PRO: "PRO",
    UBER: "UBER",
    STANDARD: "STANDARD",
    WK: "WK",
};

const ENGINE_TYPES = {
    TWIN_TURBO: "TWIN_TURBO",
    TURBO: "TURBO",
    SPORT: "SPORT",
    CITY: "CITY",
};

const CAR_TYPE_MAX_ENGINE_CAPACITY = {
    PRO: 5.2,
    UBER: 4.2,
    STANDARD: 3.6,
    WK: 2.0,
};

const GEARBOX_TYPES = {
    MANUAL: "MANUAL",
    AUTOMATIC: "AUTOMATIC",
};

export const ENGINE_POSSIBLE_GEARBOX = {
    TWIN_TURBO: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    TURBO: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    SPORT: () => true,
    CITY: () => true,
};

export const CAR_TYPE_AVAILABLE_CONFIGURATION = {
    PRO: {
        engine: (capacity) =>
            capacity <= CAR_TYPE_MAX_ENGINE_CAPACITY.PRO ? true : false,
        // gearbox: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    },
    UBER: {
        engine: (capacity) =>
            capacity <= CAR_TYPE_MAX_ENGINE_CAPACITY.UBER ? true : false,
        // gearbox: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    },
    STANDARD: {
        engine: (capacity) =>
            capacity <= CAR_TYPE_MAX_ENGINE_CAPACITY.STANDARD ? true : false,
        // gearbox: (type) =>
        //     type === GEARBOX_TYPES.AUTOMATIC || type === GEARBOX_TYPES.MANUAL
        //         ? true
        //         : false,
    },
    WK: {
        engine: (capacity) =>
            capacity <= CAR_TYPE_MAX_ENGINE_CAPACITY.WK ? true : false,
        // gearbox: (type) =>
        //     type === GEARBOX_TYPES.AUTOMATIC || type === GEARBOX_TYPES.MANUAL
        //         ? true
        //         : false,
    },
};
