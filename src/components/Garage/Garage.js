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

import CarPro from "../../assets/CarPro/CarPro";
import CarUber from "../../assets/CarUber/CarUber";
import CarWk from "../../assets/CarWk/CarWk";
import CarStandard from "../../assets/CarStandard/CarStandard";

import CarParts from "../CarParts/CarParts";

const CarOffer = styled.div`
    min-width: 220px;
    margin: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GarageLayout = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
`;

const renderCarIcon = (type, color) => {
    switch (type) {
        case "PRO":
            return <CarPro color={color} />;

        case "UBER":
            return <CarUber color={color} />;

        case "STANDARD":
            return <CarStandard color={color} />;

        case "WK":
            return <CarWk color={color} />;

        default:
            return;
    }
};

const Body = styled.div`
    padding: 20px;
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
            <h1>Garage</h1>
            <CarDetails
                car={car}
                engine={mountedEngine}
                gearbox={mountedGearbox}
            />
            <GarageLayout>
                <CarColorChange
                    car={car}
                    cash={cash}
                    changeColor={changeCarColor}
                />
                {car && (
                    <CarOffer>
                        {renderCarIcon(car.type, car.color)}
                        <button onClick={sellCar}>SELL</button>
                    </CarOffer>
                )}

                <CarParts
                    car={car}
                    engines={engines}
                    gearboxes={gearboxes}
                    mountEngine={mountEngine}
                    mountGearbox={mountGearbox}
                    mountedEngine={mountedEngine}
                />
            </GarageLayout>
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
