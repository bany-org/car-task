import React from "react";
import styled from "styled-components";

import CarPro from "../../assets/CarPro/CarPro";
import CarUber from "../../assets/CarUber/CarUber";
import CarWk from "../../assets/CarWk/CarWk";
import CarStandard from "../../assets/CarStandard/CarStandard";

const CarView = styled.div`
    min-width: 40%;
    max-width: 80%;
    min-height: 100px;
    margin: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: solid gray 2px;
    border-radius: 20px;
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

const Car = ({ car, sellCar }) => {
    return (
        <CarView>
            {car && (
                <>
                    {renderCarIcon(car.type, car.color)}
                    <button onClick={sellCar}>SELL</button>
                </>
            )}
        </CarView>
    );
};

export default Car;
