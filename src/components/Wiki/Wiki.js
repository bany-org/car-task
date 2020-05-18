import React from "react";
import styled from "styled-components";

import TopBar from "../TopBar/TopBar";

const Main = ({ addCash }) => {
    return (
        <div>
            <h1>Wiki</h1>
            <p>
                Wiki - tutaj dać info o samochodach - jak silnik pasuje do
                jakiego nadwozia i jakiej skrzyni itd
            </p>
            <button onClick={addCash}>Dodaj kasy</button>
            <br />
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/surang" title="surang">
                surang
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
            </a>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/nikita-golubev"
                    title="Nikita Golubev"
                >
                    Nikita Golubev
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                >
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/monkik"
                    title="monkik"
                >
                    monkik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/mavadee"
                    title="mavadee"
                >
                    mavadee
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/wanicon"
                    title="wanicon"
                >
                    wanicon
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
            <div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/phatplus"
                    title="phatplus"
                >
                    phatplus
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </div>
    );
};

export default Main;
