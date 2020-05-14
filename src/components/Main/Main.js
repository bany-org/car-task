import React from "react";
import styled from "styled-components";

import UserStatusBar from "../UserStatusBar/UserStatusBar";
import NavigationButton from "../NavigationButton/NavigationButton";

const MainMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = () => {
    return (
        <div>
            <UserStatusBar />
            <MainMenu>
                <NavigationButton path="/garage" label="Garage" />
                <NavigationButton path="/parts" label="Parts" />
                <NavigationButton path="/market" label="Market" />
            </MainMenu>
            <p>
                Wiki - tutaj dać info o samochodach - jak silnik pasuje do
                jakiego nadwozia i jakiej skrzyni itd
            </p>
        </div>
    );
};

export default Main;
