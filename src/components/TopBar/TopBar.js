import React from "react";
import styled from "styled-components";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

import Wiki from "../../assets/Wiki/Wiki";
import Garage from "../../assets/Garage/Garage";
import Market from "../../assets/Market/Market";
import Engine from "../../assets/Engine/Engine";

const Body = styled.div`
    padding: 20px;
    background-color: darkgray;
`;

const NavigationBar = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const TopBar = () => {
    return (
        <Body>
            <UserStatusBar />
            <NavigationBar>
                <NavigationButton path="/wiki" label="Wiki">
                    <Wiki />
                </NavigationButton>
                <NavigationButton path="/garage" label="Garage">
                    <Garage />
                </NavigationButton>
                <NavigationButton path="/market" label="Market">
                    <Market />
                </NavigationButton>
                <NavigationButton path="/parts" label="Parts">
                    <Engine />
                </NavigationButton>
            </NavigationBar>
        </Body>
    );
};

export default TopBar;
