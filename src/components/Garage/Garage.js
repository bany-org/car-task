import React from "react";
import styled, { css } from "styled-components";

import { connect } from "react-redux";

import { changeCarColor, sellCar } from "../../actions";
import { getMyCar } from "../../selectors";

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

const carTypesIcons = {
    PRO: <CarPro />,
    UBER: <CarUber />,
    STANDARD: <CarStandard />,
    WK: <CarWk />,
};

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

const Garage = ({ car, changeCarColor, cash, sellCar }) => {
    console.log("garage", car?.color);

    return (
        <>
            <TopBar />
            <h1>Garage</h1>
            {car && (
                <CarOffer>
                    <div>{car.name}</div>
                    {renderCarIcon(car.type, car.color)}
                    {/* {carTypesIcons[car.type]} */}
                    <div>Value: {car.price - 100}$</div>
                    <button onClick={sellCar}>SELL</button>
                </CarOffer>
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

            <p>Zmiana silnika</p>
            <p>Zmiana skrzyni</p>
            <h2>Dostępne części???</h2>
            <h2>Parametry samochodu?</h2>
        </>
    );
};

const mapStateToProps = (state) => ({
    car: getMyCar(state),
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
