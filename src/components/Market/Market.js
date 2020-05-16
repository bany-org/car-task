import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { buyCar } from "../../actions";
import { getCarsList } from "../../selectors";

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

const Market = ({ carsList, buyCar }) => {
    return (
        <>
            <TopBar />
            <h1>Market</h1>
            <h3>Buy a car</h3>
            <Board>
                {carsList.map((elem) => {
                    console.log("elem w mapowaniu", elem);
                    return (
                        <CarOffer key={elem.name} onClick={() => buyCar(elem)}>
                            <div>{elem.name}</div>
                            {CarTypesIcons[elem.type]}
                            <div>Price: {elem.price}$</div>
                        </CarOffer>
                    );
                })}
            </Board>
            <p>Zmiana auta</p>
            <p>Sprzedaż</p>
        </>
    );
};

const mapStateToProps = (state) => ({
    carsList: getCarsList(state),
});

const mapDispatchToProps = (dispatch) => ({
    buyCar: (car) => {
        dispatch(buyCar(car));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
