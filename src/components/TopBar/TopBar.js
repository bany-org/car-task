import React from "react";
import styled from "styled-components";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

import Wiki from "../../assets/Wiki/Wiki";
import Garage from "../../assets/Garage/Garage";
import Market from "../../assets/Market/Market";
import Engine from "../../assets/Engine/Engine";

const Body = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: darkgray;
    /* border: solid 2px darkgray; */
    /* border-radius: 15px; */
    padding: 20px;
`;

const NavigationBar = styled.div`
    /* margin-top: 10px; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const TopBar = () => {
    return (
        <Body>
            <UserStatusBar />
            <NavigationBar>
                <NavigationButton path="/garage" label="Garage">
                    <Garage />
                </NavigationButton>
                <NavigationButton path="/market" label="Market">
                    <Market />
                </NavigationButton>
                <NavigationButton path="/parts" label="Parts">
                    <Engine />
                </NavigationButton>
                <NavigationButton path="/wiki" label="Wiki">
                    <Wiki />
                </NavigationButton>
            </NavigationBar>
        </Body>
    );
};

export default TopBar;
