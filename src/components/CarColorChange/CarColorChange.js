import React from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";

const ColorPicker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    min-width: 40%;
    max-width: 80%;
`;

const CarColorChange = ({ car, changeColor }) => {
    return (
        <ColorPicker>
            {car && (
                <>
                    <CirclePicker
                        color={car?.color || "#000000"}
                        onChangeComplete={car ? changeColor : () => {}}
                    />
                    <div>Change car color - 100$</div>
                </>
            )}
            {!car && <h3>You need to buy a car</h3>}
        </ColorPicker>
    );
};

export default CarColorChange;
