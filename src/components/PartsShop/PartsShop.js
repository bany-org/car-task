import React from "react";
import { connect } from "react-redux";

import { getEnginesList } from "../../selectors";
import { buyEngine } from "../../actions";

import TopBar from "../TopBar/TopBar";

const PartsShop = ({ enginesList, buyEngine }) => {
    return (
        <div>
            <TopBar />
            <h1>Parts shop</h1>
            <h1>Engines</h1>
            {enginesList.map((elem) => (
                <div>
                    {elem.name} - {elem.capacity}L - BHP: {elem.BHP} -{" "}
                    {elem.price}$
                    <button onClick={() => buyEngine(elem)}>BUY</button>
                </div>
            ))}
            <h1>Gearboxes</h1>
            <ul>
                <li>
                    manual <button>BUY</button> Price: 50$
                </li>
                <li>
                    automatic <button>BUY</button> Price: 100$
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    enginesList: getEnginesList(state),
});

const mapDispatchToProps = (dispatch) => ({
    // changeCarColor: (color) => {
    //     dispatch(changeCarColor(color));
    // },
    buyEngine: (model) => {
        dispatch(buyEngine(model));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PartsShop);
