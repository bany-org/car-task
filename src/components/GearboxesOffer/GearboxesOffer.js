import React from "react";
import styled from "styled-components";

const Offer = styled.div`
    width: 100%;
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
    margin: 5px;
    &:hover {
        background-color: yellowgreen;
    }
`;

const GearboxesOffer = ({
    part,
    action,
    buttonLabel,
    children,
    sellGearbox,
}) => {
    return (
        <Offer key={part.type}>
            <CarImage>{children}</CarImage>
            <CarDetails>
                <div>
                    <Title>Type:</Title>
                    <OfferElementValue>{part.type}</OfferElementValue>
                </div>
                <div>
                    <Title>Usage:</Title>
                    <OfferElementValue>
                        {part.usage.join(", ")}
                    </OfferElementValue>
                </div>
                <div>
                    <Title>Buy price:</Title>
                    <OfferElementValue>{part.price}$</OfferElementValue>
                </div>
            </CarDetails>
            <OfferButton onClick={() => action(part)}>
                {buttonLabel}
            </OfferButton>
            {sellGearbox && (
                <OfferButton onClick={() => sellGearbox(part)}>
                    SELL ({part.price - 50}$)
                </OfferButton>
            )}
        </Offer>
    );
};

export default GearboxesOffer;
