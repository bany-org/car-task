import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    text-decoration: none;
    width: 150px;
    background-color: green;
`;
const NavigationButton = (props) => {
    return (
        <NavLink exact to={`${props.path}`}>
            <Button>{props.label}</Button>
        </NavLink>
    );
};

export default NavigationButton;
