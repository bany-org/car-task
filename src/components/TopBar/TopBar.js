import React from "react";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

const TopBar = () => {
    return (
        <>
            <UserStatusBar />
            <NavigationButton path="/wiki" label="Wiki" />
            <NavigationButton path="/garage" label="Garage" />
            <NavigationButton path="/market" label="Market" />
            <NavigationButton path="/parts" label="Parts" />
        </>
    );
};

export default TopBar;
