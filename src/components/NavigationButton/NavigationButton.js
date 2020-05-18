import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Tab = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    width: 150px;
    padding: 5px 0;
    /* height: 32px; */
    /* background-color: lightgray; */
    margin: 5px 10px;
    border-radius: 15px;
    &:hover {
        background-color: gray;
    }
`;

const ButtonLabel = styled.span`
    font-weight: 800;
    font-size: 20px;
`;

const NavigationButton = (props) => {
    return (
        <NavLink exact to={`${props.path}`}>
            <Tab>
                <Button>
                    {props.children}
                    <ButtonLabel>{props.label}</ButtonLabel>
                </Button>
            </Tab>
        </NavLink>
    );
};

export default NavigationButton;
