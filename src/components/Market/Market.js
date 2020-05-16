import React from "react";
import styled from "styled-components";

import TopBar from "../TopBar/TopBar";
import CarPro from "../../assets/CarPro/CarPro";
import CarUber from "../../assets/CarUber/CarUber";
import CarWk from "../../assets/CarWk/CarWk";
import CarStandard from "../../assets/CarStandard/CarStandard";

const Board = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

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

const Market = () => {
    return (
        <>
            <TopBar />
            <h1>Market</h1>
            <h3>Buy a car</h3>
            <Board>
                <CarOffer>
                    <CarPro />
                    <div>Price: 400$</div>
                </CarOffer>
                <CarOffer>
                    <CarUber />
                    <div>Price: 300$</div>
                </CarOffer>
                <CarOffer>
                    <CarStandard />
                    <div>Price: 200$</div>
                </CarOffer>
                <CarOffer>
                    <CarWk />
                    <div>Price: 100$</div>
                </CarOffer>
            </Board>
            <p>Zmiana auta</p>
            <p>Sprzedaż</p>
        </>
    );
};

export default Market;
