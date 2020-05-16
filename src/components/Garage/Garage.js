import React from "react";
import styled, { css } from "styled-components";

import TopBar from "../TopBar/TopBar";
import CarColorChange from "../CarColorChange/CarColorChange";

import CarUber from "../../assets/CarUber/CarUber";

const Car = styled.div`
    width: 300px;
    height: 10px;
    background-color: red;

    ${(props) =>
        css`
            background-color: ${props.color};
        `}
`;

const Garage = ({ carColor, changeCarColor, cash }) => {
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
            <CarUber color={carColor} />
            <p>Zmiana silnika</p>
            <p>Zmiana skrzyni</p>
            <h2>Dostępne części???</h2>
            <h2>Parametry samochodu?</h2>
        </>
    );
};

export default Garage;
