import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import {
    changeCarColor,
    sellCar,
    mountEngine,
    mountGearbox,
} from "../../actions";
import {
    getMyCar,
    getUserEnginesList,
    getMountedEngine,
    getUserGearboxes,
    getMountedGearbox,
} from "../../selectors";

import CarColorChange from "../CarColorChange/CarColorChange";
import CarDetails from "../CarDetails/CarDetails";
import EnginesOffer from "../EnginesOffer/EnginesOffer";
import Car from "../Car/Car";

import Engine from "../../assets/Engine/Engine";
import Gearbox from "../../assets/Gearbox/Gearbox";

import GearboxesOffer from "../GearboxesOffer/GearboxesOffer";

const Body = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const GarageContentRow = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: 10px;
    justify-content: space-around;
`;

const PartsList = styled.div`
    border: solid gray 2px;
    border-radius: 20px;
    min-width: 40%;
    max-width: 80%;
    margin: 10px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Garage = ({
    car,
    changeCarColor,
    cash,
    sellCar,
    engines,
    mountEngine,
    mountedEngine,
    gearboxes,
    mountGearbox,
    mountedGearbox,
}) => {
    return (
        <Body>
            <GarageContentRow>
                <CarDetails
                    car={car}
                    engine={mountedEngine}
                    gearbox={mountedGearbox}
                />
            </GarageContentRow>
            <GarageContentRow>
                <CarColorChange
                    car={car}
                    cash={cash}
                    changeColor={changeCarColor}
                />
                <Car car={car} sellCar={sellCar} />
            </GarageContentRow>
            <GarageContentRow>
                <PartsList>
                    <h3>Engines</h3>
                    {engines.map((elem) => (
                        <EnginesOffer
                            part={elem}
                            action={mountEngine}
                            buttonLabel="MOUNT"
                        >
                            <Engine />
                        </EnginesOffer>
                    ))}
                </PartsList>

                <PartsList>
                    {gearboxes.length > 0 && (
                        <>
                            <h3>Gearboxes</h3>
                            {gearboxes.map((elem) => (
                                <GearboxesOffer
                                    part={elem}
                                    action={mountGearbox}
                                    buttonLabel="MOUNT"
                                >
                                    <Gearbox />
                                </GearboxesOffer>
                            ))}
                        </>
                    )}
                    {gearboxes.length <= 0 && (
                        <h3>You need to buy a gearbox</h3>
                    )}
                </PartsList>
            </GarageContentRow>
        </Body>
    );
};

const mapStateToProps = (state) => ({
    car: getMyCar(state),
    engines: getUserEnginesList(state),
    mountedEngine: getMountedEngine(state),
    gearboxes: getUserGearboxes(state),
    mountedGearbox: getMountedGearbox(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeCarColor: (color) => {
        dispatch(changeCarColor(color));
    },
    sellCar: () => {
        dispatch(sellCar());
    },
    mountEngine: (model) => {
        dispatch(mountEngine(model));
    },
    mountGearbox: (model) => {
        dispatch(mountGearbox(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
