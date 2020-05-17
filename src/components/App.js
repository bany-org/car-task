import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import {
    updateCarsList,
    updateEnginesList,
    updateGearboxesList,
} from "../actions";

import TopBar from "./TopBar/TopBar";
import Garage from "./Garage/container";
import Wiki from "./Wiki/container";
import PartsShop from "./PartsShop/PartsShop";
import Market from "./Market/Market";

const carsList = [
    {
        name: "PRO RS3",
        price: 400,
        type: "PRO",
        color: "#000000",
    },
    {
        name: "UBER RS2",
        price: 300,
        type: "UBER",
        color: "#000000",
    },
    {
        name: "STANDARD",
        price: 200,
        type: "STANDARD",
        color: "#000000",
    },
    {
        name: "WK",
        price: 100,
        type: "WK",
        color: "#000000",
    },
];

const enginesList = [
    {
        name: "Twin Turbo",
        type: "TWIN_TURBO",
        capacity: 5.2,
        BHP: 532,
        price: 250,
    },
    {
        name: "Turbo",
        type: "TURBO",
        capacity: 4.2,
        BHP: 443,
        price: 200,
    },
    {
        name: "Sport",
        type: "SPORT",
        capacity: 3.6,
        BHP: 374,
        price: 150,
    },
    {
        name: "City",
        type: "CITY",
        capacity: 2.0,
        BHP: 166,
        price: 100,
    },
];

const gearboxesList = [
    {
        type: "AUTOMATIC",
        usage: ["Turbo", "Twin Turbo", "Sport", "City"],
        price: 200,
    },
    {
        type: "MANUAL",
        usage: ["Sport", "City"],
        price: 150,
    },
];

const Body = styled.div`
    margin: 0;
    min-height: 100vh;
    background-color: #f6f1e9;
    text-align: center;
`;

function App({ updateCarsList, updateEnginesList, updateGearboxesList }) {
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`).then((res) => {
            updateCarsList(carsList);
            updateEnginesList(enginesList);
            updateGearboxesList(gearboxesList);
            changeLoading(false);
        });
    }, []);
    return (
        <HashRouter basename="/">
            {isLoading && <div>loading</div>}
            {!isLoading && (
                <Body>
                    <TopBar />
                    <Switch>
                        <Route exact path="/wiki">
                            <Wiki />
                        </Route>
                        <Route exact path="/garage">
                            <Garage />
                        </Route>
                        <Route exact path="/parts">
                            <PartsShop />
                        </Route>
                        <Route exact path="/market">
                            <Market />
                        </Route>
                        <Redirect to="/wiki"></Redirect>
                    </Switch>
                </Body>
            )}
        </HashRouter>
    );
}

const mapDispatchToProps = (dispatch) => ({
    updateCarsList: (carsList) => {
        dispatch(updateCarsList(carsList));
    },
    updateEnginesList: (enginesList) => {
        dispatch(updateEnginesList(enginesList));
    },
    updateGearboxesList: (gearboxesList) => {
        dispatch(updateGearboxesList(gearboxesList));
    },
});

export default connect(null, mapDispatchToProps)(App);
