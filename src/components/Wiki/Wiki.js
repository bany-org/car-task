import React from "react";
import styled from "styled-components";

import TopBar from "../TopBar/TopBar";

const Main = ({ addCash }) => {
    return (
        <div>
            <h1>Wiki</h1>
            <p>
                Wiki - tutaj dać info o samochodach - jak silnik pasuje do
                jakiego nadwozia i jakiej skrzyni itd
            </p>
            <button onClick={addCash}>Dodaj kasy</button>
        </div>
    );
};

export default Main;
