import { createSelector } from "reselect";
// import {
//     SHOW_ALL,
//     SHOW_COMPLETED,
//     SHOW_ACTIVE,
// } from "../constants/TodoFilters";

// const getVisibilityFilter = (state) => state.visibilityFilter;
// const getTodos = (state) => state.todos;

export const getUserName = (state) => state.main.userData.name;

// export const getCarSet = (state) => state.carSet;
export const getUserCash = (state) => state.main.resources.cash;
export const getCarColor = (state) => state.main.carData.colorHexCode;
export const getCarsList = (state) => state.main.marketCarsList;
export const getMyCar = (state) => state.main.carData.carModel;
export const isGarageFull = (state) =>
    state.main.carData.carModel ? true : false;
export const getEnginesList = (state) => state.main.shopEnginesList;
export const getGearboxesList = (state) => state.main.shopGearboxesList;

export const getUserEnginesList = (state) => state.main.userEnginesList;
export const getMountedEngine = (state) => state.main.mountedEngine;

export const getUserGearboxes = (state) => state.main.userGearboxesList;
export const getMountedGearbox = (state) => state.main.mountedGearbox;

// export const getVisibleTodos = createSelector(
//     [getVisibilityFilter, getTodos],
//     (visibilityFilter, todos, carSet) => {
//         switch (visibilityFilter) {
//             case SHOW_ALL:
//                 return todos;
//             case SHOW_COMPLETED:
//                 return todos.filter((t) => t.completed);
//             case SHOW_ACTIVE:
//                 return todos.filter((t) => !t.completed);
//             default:
//                 throw new Error("Unknown filter: " + visibilityFilter);
//         }
//     }
// );

// export const getCompletedTodoCount = createSelector([getTodos], (todos) =>
//     todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
// );
