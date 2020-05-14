import React from "react";

import UserStatusBar from "../UserStatusBar/container";
import NavigationButton from "../NavigationButton/NavigationButton";

const Market = () => {
    return (
        <>
            <UserStatusBar />
            <NavigationButton path="/" label="Menu" />
            <NavigationButton path="/garage" label="Garage" />
            <NavigationButton path="/parts" label="Parts" />
            <h1>Market</h1>
            <p>Zmiana auta</p>
            <p>Kupno</p>
            <p>Sprzedaż</p>
        </>
    );
};

export default Market;
