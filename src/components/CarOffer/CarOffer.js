import React from "react";
import styled from "styled-components";

import CarPro from "../../assets/CarPro/CarPro";
import CarUber from "../../assets/CarUber/CarUber";
import CarWk from "../../assets/CarWk/CarWk";
import CarStandard from "../../assets/CarStandard/CarStandard";

const CarTypesIcons = {
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

const CarImage = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 150px;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Offer = styled.div`
    width: 100%;
    min-height: 100%;
    margin: 20px;
    padding: 5px;
    background-color: gray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const OfferButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    border-radius: 20px;
    height: 30%;
    padding: 10px;
    min-width: 100px;
    font-weight: 900;
    cursor: pointer;
    &:hover {
        background-color: yellowgreen;
    }
`;

const CarDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: lightgrey;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin: 0 10px;
    @media (max-width: 800px) {
        width: 100%;
        margin: 10px 0px;
    }
`;

const Title = styled.div`
    font-style: italic;
`;

const OfferElementValue = styled.div`
    font-weight: 900;
`;

const CarOffer = ({ car, action, actionLabel }) => {
    return (
        <Offer>
            <CarImage>{renderCarIcon(car.type, car.color)}</CarImage>
            <CarDetails>
                <div>
                    <Title>Model:</Title>
                    <OfferElementValue>{car.name}</OfferElementValue>
                </div>
                <div>
                    <Title>Buy price:</Title>
                    <OfferElementValue>{car.price}$</OfferElementValue>
                </div>
            </CarDetails>
            <OfferButton onClick={() => action(car)}>{actionLabel}</OfferButton>
        </Offer>
    );
};

export default CarOffer;
