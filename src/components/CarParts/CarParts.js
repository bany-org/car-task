import React from "react";

import { CAR_TYPE_AVAILABLE_CONFIGURATION } from "../../config/Config";

const CarParts = ({
    engines,
    gearboxes,
    car,
    mountEngine,
    mountGearbox,
    mountedEngine,
}) => {
    return (
        <div>
            <h2>My engines</h2>
            {engines &&
                engines.map((elem) => {
                    let isEngineValid = false;
                    if (car) {
                        isEngineValid = CAR_TYPE_AVAILABLE_CONFIGURATION[
                            car.type
                        ].engine(elem.capacity);
                    }

                    return (
                        <div key={elem.type}>
                            <div>
                                {`${elem.name} - ${elem.BHP} BHP - ${elem.capacity}L`}
                            </div>
                            <button
                                disabled={!car || !isEngineValid}
                                onClick={() => mountEngine(elem)}
                            >
                                {!car && "You need a car"}
                                {car && !isEngineValid && "Engine is to strong"}
                                {isEngineValid && "Mount in car"}
                            </button>
                        </div>
                    );
                })}
            <h2>My gearboxes</h2>
            {gearboxes &&
                gearboxes.map((elem) => {
                    return (
                        <div>
                            {elem.type}

                            <button
                                onClick={() => mountGearbox(elem)}
                                disabled={!mountedEngine}
                            >
                                Mount in car
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};

export default CarParts;
