import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import userData from "./userData";
import carSet from "./carSet";

const rootReducer = combineReducers({
    todos,
    userData,
    visibilityFilter,
    carSet,
});

export default rootReducer;
