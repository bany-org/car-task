import React from "react";
import styled, { css } from "styled-components";

import { connect } from "react-redux";

// import { buyCar } from "../../actions"; seel a car?
import { getMyCarsList } from "../../selectors";

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

const Garage = ({ carColor, changeCarColor, cash, myCarsList }) => {
    return (
        <>
            <TopBar />
            <h1>Garage</h1>
            <p>Zmiana koloru</p>
            {cash >= 100 && (
                <CarColorChange
                    carColor={carColor}
                    changeColor={changeCarColor}
                />
            )}
            {cash < 100 && <div>Za mało kasy</div>}

            {/* <Car color={carColor} /> */}
            {/* <CarUber color={carColor} /> */}
            {myCarsList.map((elem) => {
                console.log("elem w mapowaniu", elem);
                return (
                    <CarOffer key={elem.name}>
                        <div>{elem.name}</div>
                        {carTypesIcons[elem.type]}
                        <div>Value: {elem.price - 100}$</div>
                    </CarOffer>
                );
            })}
            <p>Zmiana silnika</p>
            <p>Zmiana skrzyni</p>
            <h2>Dostępne części???</h2>
            <h2>Parametry samochodu?</h2>
        </>
    );
};

const mapStateToProps = (state) => ({
    myCarsList: getMyCarsList(state),
});

const mapDispatchToProps = (dispatch) => ({
    // buyCar: (car) => {
    //     dispatch(buyCar(car));
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
