import { combineReducers } from "redux";

// import todos from "./todos";
// import visibilityFilter from "./visibilityFilter";
// import userData from "./userData";
// import carSet from "./carSet";

import main from "./main";

const rootReducer = combineReducers({
    // todos,
    // userData,
    // visibilityFilter,
    main,
});

export default rootReducer;
