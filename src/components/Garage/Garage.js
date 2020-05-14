import React from "react";

import UserStatusBar from "../UserStatusBar/UserStatusBar";
import NavigationButton from "../NavigationButton/NavigationButton";

const Garage = () => {
    return (
        <>
            <UserStatusBar />
            <NavigationButton path="/" label="Menu"></NavigationButton>
            <NavigationButton path="/market" label="Maket"></NavigationButton>
            <NavigationButton path="/parts" label="Parts"></NavigationButton>
            <h1>Garage</h1>
            <p>Zmiana koloru</p>
            <p>Zmiana silnika</p>
            <p>Zmiana skrzyni</p>
            <h2>Dostępne części???</h2>
            <h2>Parametry samochodu?</h2>
        </>
    );
};

export default Garage;
