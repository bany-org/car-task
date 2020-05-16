import React from "react";
import styled from "styled-components";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

const Navigation = styled.div`
    width: 100%;
`;

const TopBar = () => {
    return (
        <>
            <UserStatusBar />
            <Navigation>
                <NavigationButton path="/wiki" label="Wiki" />
                <NavigationButton path="/garage" label="Garage" />
                <NavigationButton path="/market" label="Market" />
                <NavigationButton path="/parts" label="Parts" />
            </Navigation>
        </>
    );
};

export default TopBar;
