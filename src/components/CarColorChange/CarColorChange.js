import React from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";

const ColorPicker = styled.div`
    background-color: lightslategrey;
    padding: 15px;
`;

const CarColorChange = ({ car, cash, changeColor }) => {
    return (
        <ColorPicker>
            {car && cash < 100 && <div>Za mało kasy by pomalować!</div>}
            {!car && <h3>You need a car</h3>}
            {car && cash >= 100 && (
                <>
                    <CirclePicker
                        color={car.color}
                        onChangeComplete={car ? changeColor : () => {}}
                    />
                    <p>Zmiana koloru - 100$</p>
                </>
            )}
        </ColorPicker>
    );
};

export default CarColorChange;
