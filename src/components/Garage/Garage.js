import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { CAR_TYPE_AVAILABLE_CONFIGURATION } from "../../config/Config";

import {
    changeCarColor,
    sellCar,
    mountEngine,
    mountGearbox,
} from "../../actions";
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

import GarageImage from "../../assets/images/rob-walsh-unsplash.jpg";

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

const Body = styled.div`
    padding: 20px;
`;

const CarPlaceholder = styled.div``;

const Garage = ({
    car,
    changeCarColor,
    cash,
    sellCar,
    engines,
    mountEngine,
    mountedEngine,
    gearboxes,
    mountGearbox,
    mountedGearbox,
}) => {
    return (
        <Body>
            <h1>Garage</h1>
            <CarPlaceholder>
                {car && (
                    <>
                        <h2>Car parameters</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Engine</th>
                                    <th>Engine capacity</th>
                                    <th>BHP</th>
                                    <th>Gearbox</th>
                                    <th>Sell value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{car.name}</td>
                                    <td>
                                        {mountedEngine
                                            ? mountedEngine.name
                                            : "---"}
                                    </td>
                                    <td>
                                        {mountedEngine
                                            ? `${mountedEngine.capacity} L`
                                            : "---"}
                                    </td>
                                    <td>
                                        {mountedEngine
                                            ? `${mountedEngine.BHP} `
                                            : "---"}
                                    </td>
                                    <td>
                                        {mountedGearbox
                                            ? mountedGearbox.type
                                            : "---"}
                                    </td>
                                    <td>{`${car.price - 100}$`}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
                {car && (
                    <>
                        <CarOffer>
                            {renderCarIcon(car.type, car.color)}
                            <button onClick={sellCar}>SELL</button>
                        </CarOffer>
                    </>
                )}
            </CarPlaceholder>
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
        </Body>
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
    mountGearbox: (model) => {
        dispatch(mountGearbox(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
