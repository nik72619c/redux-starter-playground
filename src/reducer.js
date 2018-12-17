import { createReducer } from "redux-starter-kit";

var initialState = {};
export const myreducer = createReducer(initialState, {
  reducer: (state, action) => {
    console.log("reducer functioning fine...");
  }
});
