import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import { updateCarsList } from "../actions";

import Garage from "./Garage/container";
import Wiki from "./Wiki/container";
import PartsShop from "./PartsShop/PartsShop";
import Market from "./Market/Market";

const carsList = [
    {
        name: "PRO RS3",
        price: 400,
        type: "PRO",
    },
    {
        name: "UBER RS2",
        price: 300,
        type: "UBER",
    },
    {
        name: "STANDARD",
        price: 200,
        type: "STANDARD",
    },
    {
        name: "WK",
        price: 100,
        type: "WK",
    },
];

const Body = styled.div`
    margin: 0;
    min-height: 100vh;
    background-color: #f6f1e9;
    text-align: center;
`;

function App({ updateCarsList }) {
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`).then((res) => {
            // updateRecipesList(res.data);
            updateCarsList(carsList);
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
});

export default connect(null, mapDispatchToProps)(App);
