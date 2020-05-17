import React from "react";
import styled from "styled-components";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

const Body = styled.div`
    padding: 20px;
    background-color: darkgray;
`;

const NavigationBar = styled.div`
    margin-top: 10px;
    width: 100%;
`;

const TopBar = () => {
    return (
        <Body>
            <UserStatusBar />
            <NavigationBar>
                <NavigationButton path="/wiki" label="Wiki" />
                <NavigationButton path="/garage" label="Garage" />
                <NavigationButton path="/market" label="Market" />
                <NavigationButton path="/parts" label="Parts" />
            </NavigationBar>
        </Body>
    );
};

export default TopBar;
