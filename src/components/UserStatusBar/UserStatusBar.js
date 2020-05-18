import React from "react";
import styled from "styled-components";

import Cash from "../../assets/Cash/Cash";
import Driver from "../../assets/Driver/Driver";

const InfoBar = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px dotted black;
    padding-bottom: 10px;
`;

const InfoElement = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

const InfoValue = styled.span`
    font-weight: 800;
    margin-left: 10px;
`;

const UserStatusBar = ({ cash, userName }) => {
    return (
        <InfoBar>
            <InfoElement>
                <Cash />
                <InfoValue>{cash}$</InfoValue>
            </InfoElement>
            <InfoElement>
                <Driver />
                <InfoValue>{userName}</InfoValue>
            </InfoElement>
        </InfoBar>
    );
};

export default UserStatusBar;
