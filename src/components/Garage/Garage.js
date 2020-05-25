import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
    changeCarColor,
    sellCar,
    mountEngine,
    mountGearbox,
    sellEngine,
    sellGearbox,
} from "../../actions";
import {
    getMyCar,
    getUserEnginesList,
    getMountedEngine,
    getUserGearboxes,
    getMountedGearbox,
    getCarColor,
    getUserCash,
} from "../../selectors";

import CarColorChange from "../CarColorChange/CarColorChange";
import CarDetails from "../CarDetails/CarDetails";
import EnginesOffer from "../EnginesOffer/EnginesOffer";

import Engine from "../../assets/Engine/Engine";
import Gearbox from "../../assets/Gearbox/Gearbox";

import GearboxesOffer from "../GearboxesOffer/GearboxesOffer";
import CarOffer from "../CarOffer/CarOffer";

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
    min-height: 100px;
    height: 100%;

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
    sellEngine,
    sellGearbox,
}) => {
    return (
        <Body>
            <GarageContentRow>
                {!car && <h3>You need to buy a car</h3>}
                {car && (
                    <CarDetails
                        car={car}
                        engine={mountedEngine}
                        gearbox={mountedGearbox}
                    />
                )}
            </GarageContentRow>
            <GarageContentRow>
                <PartsList>
                    <CarColorChange
                        car={car}
                        cash={cash}
                        changeColor={changeCarColor}
                    />
                </PartsList>
                <PartsList>
                    {!car && <h3>You need to buy a car</h3>}
                    {car && (
                        <CarOffer
                            car={car}
                            sellCar={sellCar}
                            actionLabel="SELL CAR"
                        />
                    )}
                </PartsList>
            </GarageContentRow>
            <GarageContentRow>
                <PartsList>
                    {engines.length > 0 && (
                        <>
                            <h3>Engines</h3>
                            {engines.map((elem) => (
                                <EnginesOffer
                                    part={elem}
                                    action={mountEngine}
                                    buttonLabel="MOUNT"
                                    sellEngine={sellEngine}
                                    key={elem.name}
                                >
                                    <Engine />
                                </EnginesOffer>
                            ))}
                        </>
                    )}
                    {engines.length <= 0 && <h3>You need to buy engine</h3>}
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
                                    sellGearbox={sellGearbox}
                                    key={elem.type}
                                >
                                    <Gearbox />
                                </GearboxesOffer>
                            ))}
                        </>
                    )}
                    {gearboxes.length <= 0 && <h3>You need to buy gearbox</h3>}
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
    carColor: getCarColor(state),
    cash: getUserCash(state),
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
    sellEngine: (model) => {
        dispatch(sellEngine(model));
    },
    sellGearbox: (model) => {
        dispatch(sellGearbox(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
