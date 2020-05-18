import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { buyCar } from "../../actions";
import { getCarsList, isGarageFull } from "../../selectors";

import TopBar from "../TopBar/TopBar";
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

const CarImage = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 150px;
`;

const CarDetails = styled.div`
    background-color: lightgray;
    height: 90%;
    border-radius: 10px;
    width: 70%;
    margin: 0 10px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Board = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const CarOffer = styled.div`
    width: 80%;
    min-height: 100%;
    margin: 20px;
    padding: 5px;
    background-color: gray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
        background-color: lightslategray;
    }
`;

const OfferButton = styled.div`
    background-color: yellow;
    border-radius: 10px;
    padding: 10px;
    min-width: 100px;
`;

const Market = ({ carsList, buyCar, fullGarage }) => {
    return (
        <>
            <h1>Market</h1>
            {fullGarage && (
                <>
                    <h1>New car is in your garage</h1>
                    <h3>
                        Your garage is full. Is You want to buy new car, first
                        sell current one
                    </h3>
                </>
            )}
            {!fullGarage && (
                <Board>
                    {carsList.map((elem) => {
                        console.log("elem w mapowaniu", elem);
                        return (
                            <CarOffer
                                key={elem.name}
                                onClick={() => buyCar(elem)}
                            >
                                <CarImage>{CarTypesIcons[elem.type]}</CarImage>
                                <CarDetails>
                                    <div>Model: {elem.name}</div>
                                    <div>Price: {elem.price}$</div>
                                </CarDetails>
                                <OfferButton>BUY NOW</OfferButton>
                            </CarOffer>
                        );
                    })}
                </Board>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    carsList: getCarsList(state),
    fullGarage: isGarageFull(state),
});

const mapDispatchToProps = (dispatch) => ({
    buyCar: (car) => {
        dispatch(buyCar(car));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
