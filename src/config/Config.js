const CAR_TYPES = {
    PRO: "PRO",
    UBER: "UBER",
    STANDARD: "STANDARD",
    WK: "WK",
};

const ENGINE_TYPES = {};

const GEARBOX_TYPES = {
    MANUAL: "MANUAL",
    AUTOMATIC: "AUTOMATIC",
};

export const AVAILABLE_CAR_TYPE_ENGINES = {
    PRO: {
        engine: (capacity) => (capacity < 6 ? true : false),
        gearbox: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    },
    WK: {
        engine: (capacity) => (capacity <= 2 ? true : false),
        gearbox: (type) => (type === GEARBOX_TYPES.AUTOMATIC ? true : false),
    },
};
