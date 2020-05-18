import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonLabel = styled.span`
    margin-left: 5px;
    font-weight: 800;
    font-size: 20px;
    font-family: "Lato", sans-serif;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 15px;
    /* width: 160px; */
    /* border: solid gray 1px; */
`;

const NavigationButton = (props) => {
    return (
        <StyledNavLink
            exact
            to={`${props.path}`}
            activeStyle={{
                "background-color": "white",
                height: "100%",
                "border-color": "white",
            }}
        >
            {props.children}
            <ButtonLabel>{props.label}</ButtonLabel>
        </StyledNavLink>
    );
};

export default NavigationButton;
