import React from "react";

import UserStatusBar from "../UserStatusBar/UserStatusBar";
import NavigationButton from "../NavigationButton/NavigationButton";

const PartsShop = () => {
    return (
        <div>
            <UserStatusBar />
            <NavigationButton path="/" label="Menu" />
            <NavigationButton path="/garage" label="Garage" />
            <NavigationButton path="/market" label="Market" />
            <h1>Parts shop</h1>
            <p>Zakup silnika</p>
            <p>Zakup skrzyni</p>

            <p>sprzedaż części? silniki skrzynia?</p>
        </div>
    );
};

export default PartsShop;
