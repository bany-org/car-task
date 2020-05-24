import React from "react";
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px;
`;

const Requirements = styled.div`
    width: 80%;
    text-align: left;
    border: solid gray 2px;
    border-radius: 20px;
    width: 80%;
    margin: 20px;
    padding: 0 20px;
`;

const Main = ({ addCash }) => {
    return (
        <Body>
            <Requirements>
                <h3>Requirements</h3>
                <ul>
                    <li>
                        Each car model can have a different engine lineup - not
                        all engines fit all cars (e.g. PRO RS3 can be fitted
                        with all 4 engines, while the WK model only fits the
                        weakest engine)
                    </li>
                    <li>
                        Each engine has a different set of gearbox choices (e.g.
                        the most powerful engine can only be fitted with an
                        automatic transmission)
                    </li>
                    <li>
                        Each element has a price that is summed up in the
                        summary
                    </li>
                </ul>
            </Requirements>
            <Requirements>
                <h3>General rules</h3>
                <ul>
                    <li>
                        You can sell your car for 100$ less than its basic value
                    </li>
                    <li>
                        You can sell engine for 50$ less than its basic value
                    </li>
                    <li>
                        You can sell gearbox for 50$ less than its basic value
                    </li>
                    <li>You can paint your car for 100$</li>
                </ul>
            </Requirements>
            <Requirements>
                <h3>Sources</h3>
                <div>
                    Icons made by{" "}
                    <a
                        href="https://www.flaticon.com/authors/surang"
                        title="surang"
                    >
                        surang
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/nikita-golubev"
                        title="Nikita Golubev"
                    >
                        Nikita Golubev
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                    >
                        Freepik
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/monkik"
                        title="monkik"
                    >
                        monkik
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/mavadee"
                        title="mavadee"
                    >
                        mavadee
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/wanicon"
                        title="wanicon"
                    >
                        wanicon
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/phatplus"
                        title="phatplus"
                    >
                        phatplus
                    </a>{" "}
                    <a
                        href="https://www.flaticon.com/authors/eucalyp"
                        title="Eucalyp"
                    >
                        Eucalyp
                    </a>
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </div>
            </Requirements>
            <h3>Secret button</h3>
            <button onClick={addCash}>Add money</button>
        </Body>
    );
};

export default Main;
