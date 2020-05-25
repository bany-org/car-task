import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getUserCash, getUserName } from "../../selectors";

import Cash from "../../assets/Cash/Cash";
import Driver from "../../assets/Driver/Driver";

const InfoBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-wrap: wrap; */
    padding-bottom: 10px;
    border: solid white 3px;
    border-radius: 15px;
    padding: 0px 10px;
    width: 250px;
`;

const InfoElement = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    margin: 5px 5px;
`;

const InfoValue = styled.span`
    font-weight: 800;
    margin-left: 10px;
`;

const UserStatusBar = ({ cash, userName }) => {
    return (
        <InfoBar>
            <InfoElement>
                <Driver />
                <InfoValue>{userName}</InfoValue>
            </InfoElement>
            <InfoElement>
                <Cash />
                <InfoValue>{cash} $</InfoValue>
            </InfoElement>
        </InfoBar>
    );
};

const mapStateToProps = (state) => ({
    cash: getUserCash(state),
    userName: getUserName(state),
});

export default connect(mapStateToProps)(UserStatusBar);
