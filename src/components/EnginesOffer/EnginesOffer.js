import React from "react";
import styled from "styled-components";

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

const CarImage = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 150px;
    @media (max-width: 800px) {
        width: 100%;
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

const EnginesOffer = ({ part, buyAction, children }) => {
    return (
        <Offer key={part.name}>
            <CarImage>{children}</CarImage>
            <CarDetails>
                <div>
                    <Title>Name:</Title>
                    <OfferElementValue>{part.name}</OfferElementValue>
                </div>
                <div>
                    <Title>Capacity:</Title>
                    <OfferElementValue>{part.capacity} L</OfferElementValue>
                </div>
                <div>
                    <Title>BHP:</Title>
                    <OfferElementValue>{part.BHP} HP</OfferElementValue>
                </div>
                <div>
                    <Title>Price:</Title>
                    <OfferElementValue>{part.price}$</OfferElementValue>
                </div>
            </CarDetails>
            <OfferButton onClick={() => buyAction(part)}>BUY NOW</OfferButton>
        </Offer>
    );
};

export default EnginesOffer;
