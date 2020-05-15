import React from "react";

const UserStatusBar = ({ cash, userName }) => {
    return (
        <div>
            Cash: {cash} Name: {userName}
        </div>
    );
};

export default UserStatusBar;
