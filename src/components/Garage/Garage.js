import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { AVAILABLE_CAR_TYPE_ENGINES } from "../../config/Config";

import { changeCarColor, sellCar } from "../../actions";
import { getMyCar, getUserEnginesList } from "../../selectors";

import TopBar from "../TopBar/TopBar";
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

const Garage = ({ car, changeCarColor, cash, sellCar, engines }) => {
    console.log("garage", car?.color);

    return (
        <>
            <TopBar />
            <h1>Garage</h1>
            {car && (
                <>
                    <h2>My cars</h2>
                    <CarOffer>
                        <div>{car.name}</div>
                        {renderCarIcon(car.type, car.color)}
                        {/* {carTypesIcons[car.type]} */}
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
            {engines.map((elem) => {
                let isEngineValid = false;
                if (car) {
                    console.log(
                        "if",
                        AVAILABLE_CAR_TYPE_ENGINES[car.type].engine(
                            elem.capacity
                        )
                    );
                    isEngineValid = AVAILABLE_CAR_TYPE_ENGINES[car.type].engine(
                        elem.capacity
                    );
                }

                console.log("isvalid", isEngineValid);

                return (
                    <>
                        <div>
                            {`${elem.name} - ${elem.BHP} BHP - ${elem.capacity}L`}
                        </div>
                        <button disabled={!car || !isEngineValid}>
                            {!isEngineValid && "Engine is to strong"}
                            {isEngineValid && "Mount in car"}
                        </button>
                    </>
                );
            })}
            <h2>My gearboxes</h2>
            <h2>Car parameters</h2>
        </>
    );
};

const mapStateToProps = (state) => ({
    car: getMyCar(state),
    engines: getUserEnginesList(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeCarColor: (color) => {
        dispatch(changeCarColor(color));
    },
    sellCar: () => {
        dispatch(sellCar());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
