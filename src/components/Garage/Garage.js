import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { CAR_TYPE_AVAILABLE_CONFIGURATION } from "../../config/Config";

import { changeCarColor, sellCar, mountEngine } from "../../actions";
import {
    getMyCar,
    getUserEnginesList,
    getMountedEngine,
    getUserGearboxes,
    getMountedGearbox,
} from "../../selectors";

import CarColorChange from "../CarColorChange/CarColorChange";

import CarPro from "../../assets/CarPro/CarPro";
import CarUber from "../../assets/CarUber/CarUber";
import CarWk from "../../assets/CarWk/CarWk";
import CarStandard from "../../assets/CarStandard/CarStandard";

const CarOffer = styled.div`
    min-width: 220px;
    margin: 20px;
    background-color: lightgray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        background-color: gray;
    }
`;

const renderCarIcon = (type, color) => {
    switch (type) {
        case "PRO":
            return <CarPro color={color} />;

        case "UBER":
            return <CarUber color={color} />;

        case "STANDARD":
            return <CarStandard color={color} />;

        case "WK":
            return <CarWk color={color} />;

        default:
            return;
    }
};

const Garage = ({
    car,
    changeCarColor,
    cash,
    sellCar,
    engines,
    mountedEngine,
    mountEngine,
    gearboxes,
}) => {
    console.log("garage", car?.color);

    return (
        <>
            <h1>Garage</h1>
            <div>
                {car && (
                    <>
                        <h2>Car parameters</h2>
                        <p>{`Name: ${car.name}`}</p>
                    </>
                )}
                {mountedEngine && (
                    <div>
                        <p>{`Engine name: ${mountedEngine.name}`}</p>
                        <p>{`Engine capacity: ${mountedEngine.capacity}`}</p>
                    </div>
                )}
            </div>
            {car && (
                <>
                    <CarOffer>
                        <div>{car.name}</div>
                        {renderCarIcon(car.type, car.color)}
                        <div>Value: {car.price - 100}$</div>
                        <button onClick={sellCar}>SELL</button>
                    </CarOffer>
                </>
            )}
            {cash < 100 && <div>Za mało kasy by pomalować!</div>}
            {car && cash >= 100 && (
                <>
                    <p>Zmiana koloru - 100$</p>
                    <CarColorChange
                        carColor={car?.color}
                        changeColor={changeCarColor}
                    />
                </>
            )}

            <h2>My engines</h2>
            {engines &&
                engines.map((elem) => {
                    let isEngineValid = false;
                    if (car) {
                        console.log(
                            "if",
                            CAR_TYPE_AVAILABLE_CONFIGURATION[car.type].engine(
                                elem.capacity
                            )
                        );
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
                    return <p>{elem.type}</p>;
                })}
        </>
    );
};

const mapStateToProps = (state) => ({
    car: getMyCar(state),
    engines: getUserEnginesList(state),
    mountedEngine: getMountedEngine(state),
    gearboxes: getUserGearboxes(state),
    mountedGearbox: getMountedGearbox(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeCarColor: (color) => {
        dispatch(changeCarColor(color));
    },
    sellCar: () => {
        dispatch(sellCar());
    },
    mountEngine: (model) => {
        dispatch(mountEngine(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
