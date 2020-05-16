import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import { updateCarsList, updateEnginesList } from "../actions";

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
        capacity: 5.2,
        BHP: 532,
        price: 250,
    },
    {
        name: "Turbo",
        capacity: 4.2,
        BHP: 443,
        price: 200,
    },
    {
        name: "Sport",
        capacity: 3.6,
        BHP: 374,
        price: 150,
    },
    {
        name: "City",
        capacity: 2.0,
        BHP: 166,
        price: 100,
    },
];

const Body = styled.div`
    margin: 0;
    min-height: 100vh;
    background-color: #f6f1e9;
    text-align: center;
`;

function App({ updateCarsList, updateEnginesList }) {
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`).then((res) => {
            // updateRecipesList(res.data);
            updateCarsList(carsList);
            updateEnginesList(enginesList);
            changeLoading(false);
        });
    }, []);
    return (
        <HashRouter basename="/">
            {isLoading && <div>loading</div>}
            {!isLoading && (
                <Body>
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
});

export default connect(null, mapDispatchToProps)(App);
