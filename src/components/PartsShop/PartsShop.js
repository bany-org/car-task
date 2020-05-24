import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getEnginesList, getGearboxesList } from "../../selectors";
import { buyEngine, buyGearbox } from "../../actions";

import EnginesOffer from "../EnginesOffer/EnginesOffer";
import GearboxesOffer from "../GearboxesOffer/GearboxesOffer";

import Engine from "../../assets/Engine/Engine";
import Gearbox from "../../assets/Gearbox/Gearbox";

const Body = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PartsList = styled.div`
    border: solid gray 2px;
    border-radius: 20px;
    width: 80%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        width: 60%;
    }
`;

const PartsShop = ({ enginesList, buyEngine, gearboxesList, buyGearbox }) => {
    return (
        <Body>
            <h1>Engines</h1>
            {enginesList.length > 0 && (
                <PartsList>
                    {enginesList.map((elem) => (
                        <EnginesOffer
                            part={elem}
                            action={buyEngine}
                            buttonLabel="BUY NOW"
                            key={elem.name}
                        >
                            <Engine />
                        </EnginesOffer>
                    ))}
                </PartsList>
            )}
            {enginesList.length === 0 && (
                <h3>No engines at this moment available</h3>
            )}

            <h1>Gearboxes</h1>
            {gearboxesList.length > 0 && (
                <PartsList>
                    {gearboxesList.map((elem) => (
                        <GearboxesOffer
                            part={elem}
                            action={buyGearbox}
                            buttonLabel="BUY NOW"
                            key={elem.type}
                        >
                            <Gearbox />
                        </GearboxesOffer>
                    ))}
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
