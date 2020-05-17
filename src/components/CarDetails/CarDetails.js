import React from "react";
import styled from "styled-components";

const CarInfo = styled.table`
    width: 100%;
    background-color: lightskyblue;
`;

const CarDetails = ({ car, engine, gearbox }) => {
    return (
        <>
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
        </>
    );
};

export default CarDetails;
