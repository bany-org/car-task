import React, { useState } from "react";

import { CirclePicker } from "react-color";

const CarColorChange = ({ carColor, changeColor }) => {
    // const [currentColor, changeColor] = useState();

    return <CirclePicker color={carColor} onChangeComplete={changeColor} />;
};

export default CarColorChange;
