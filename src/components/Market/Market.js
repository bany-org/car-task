import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CarOffer from "../CarOffer/CarOffer";

import { buyCar } from "../../actions";
import { getCarsList, isGarageFull } from "../../selectors";

const Body = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Board = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    border: solid gray 2px;
    border-radius: 20px;
    width: 50%;

    @media (max-width: 1024px) {
        width: 80%;
    }
`;

const Market = ({ carsList, buyCar, fullGarage }) => {
    return (
        <Body>
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
                        return (
                            <CarOffer
                                key={elem.name}
                                car={elem}
                                buyCar={buyCar}
                                actionLabel="BUY NOW"
                            ></CarOffer>
                        );
                    })}
                </Board>
            )}
        </Body>
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
