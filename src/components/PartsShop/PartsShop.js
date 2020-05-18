import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getEnginesList, getGearboxesList } from "../../selectors";
import { buyEngine, buyGearbox } from "../../actions";

const Body = styled.div`
    padding: 15px;
`;

const PartsList = styled.table`
    background-color: lightskyblue;
    width: 100%;
`;

const Data = styled.td`
    border: 1px solid blue;
`;

const PartsShop = ({ enginesList, buyEngine, gearboxesList, buyGearbox }) => {
    return (
        <Body>
            <h1>Parts shop</h1>
            <h1>Engines</h1>
            {enginesList.length > 0 && (
                <PartsList>
                    <thead>
                        <tr>
                            <th>Engine</th>
                            <th>CC</th>
                            <th>BHP</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enginesList.map((elem) => (
                            <tr key={elem.name}>
                                <Data>{elem.name}</Data>
                                <Data>{elem.capacity} L</Data>
                                <Data>{elem.BHP}</Data>
                                <Data>{elem.price}$</Data>
                                <Data>
                                    <button onClick={() => buyEngine(elem)}>
                                        BUY
                                    </button>
                                </Data>
                            </tr>
                        ))}
                    </tbody>
                </PartsList>
            )}
            {enginesList.length === 0 && (
                <h3>No engines at this moment available</h3>
            )}

            <h1>Gearboxes</h1>
            {console.log(gearboxesList)}
            {gearboxesList.length > 0 && (
                <PartsList>
                    <thead>
                        <tr>
                            <th>Gearbox</th>
                            <th>Useable for engines</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gearboxesList.map((elem) => (
                            <tr key={elem.name}>
                                <Data>{elem.type}</Data>
                                <Data>{elem.usage.join(", ")}</Data>
                                <Data>{elem.price}$</Data>
                                <Data>
                                    <button onClick={() => buyGearbox(elem)}>
                                        BUY
                                    </button>
                                </Data>
                            </tr>
                        ))}
                    </tbody>
                </PartsList>
            )}
            {gearboxesList.length === 0 && (
                <h3>No gearboxes at this moment available</h3>
            )}
        </Body>
    );
};

const mapStateToProps = (state) => ({
    enginesList: getEnginesList(state),
    gearboxesList: getGearboxesList(state),
});

const mapDispatchToProps = (dispatch) => ({
    buyEngine: (model) => {
        dispatch(buyEngine(model));
    },
    buyGearbox: (model) => {
        dispatch(buyGearbox(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PartsShop);
