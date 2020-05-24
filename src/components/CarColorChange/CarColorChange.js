import React from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";

const ColorPicker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: lightslategrey; */
    padding: 10px;

    border: solid gray 2px;
    border-radius: 20px;
    min-width: 40%;
    max-width: 80%;
`;

const CarColorChange = ({ car, cash, changeColor }) => {
    return (
        <ColorPicker>
            {car && (
                <>
                    <CirclePicker
                        color={car?.color || "#000000"}
                        onChangeComplete={car ? changeColor : () => {}}
                    />
                    <div>Zmiana koloru - 100$</div>
                </>
            )}
            {!car && <h3>You need to buy a car</h3>}
        </ColorPicker>
    );
};

export default CarColorChange;
