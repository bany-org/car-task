import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Garage from "./Garage/Garage";
import Main from "./Main/container";
import PartsShop from "./PartsShop/PartsShop";
import Market from "./Market/Market";

import styled from "styled-components";

const Body = styled.div`
    margin: 0;
    min-height: 100vh;
    background-color: #f6f1e9;
    text-align: center;
`;

function App() {
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`).then((res) => {
            // updateRecipesList(res.data);
            changeLoading(false);
        });
    }, []);
    return (
        <HashRouter basename="/">
            {isLoading && <div>loading</div>}
            {!isLoading && (
                <Body>
                    <Switch>
                        <Route exact path="/">
                            <Main />
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
                        <Redirect to="/"></Redirect>
                    </Switch>
                </Body>
            )}
            ;
        </HashRouter>
    );
}

export default App;
