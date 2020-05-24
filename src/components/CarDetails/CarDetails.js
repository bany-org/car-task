import React from "react";
import styled from "styled-components";

const CarParameters = styled.div`
    border: solid gray 2px;
    border-radius: 20px;
    width: 100%;

    padding: 20px;
`;

const CarInfo = styled.table`
    width: 100%;
    background-color: lightskyblue;
    border-radius: 10px;
`;

const CarDetails = ({ car, engine, gearbox }) => {
    return (
        <CarParameters>
            <h2>Car parameters</h2>
            <CarInfo>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Engine</th>
                        <th>Engine capacity</th>
                        <th>BHP</th>
                        <th>Gearbox</th>
                        <th>Sell value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{car ? car.name : "---"}</td>
                        <td>{engine ? engine.name : "---"}</td>
                        <td>{engine ? `${engine.capacity} L` : "---"}</td>
                        <td>{engine ? `${engine.BHP} ` : "---"}</td>
                        <td>{gearbox ? gearbox.type : "---"}</td>
                        <td>{car ? `${car.price - 100}$` : "---"}</td>
                    </tr>
                </tbody>
            </CarInfo>
        </CarParameters>
    );
};

export default CarDetails;
