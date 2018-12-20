import { createReducer } from "redux-starter-kit";
import { myaction } from "./action";

var initialState = {};
export const myreducer = createReducer(initialState, {
 
  [myaction]: (state=initialState, action) => {
    console.log('inside reducer');
    state.val = state.val + action.payload;
    console.log("state is " + state + "and action is " + action);
    console.log("reducer functioning fine...");
    return state;
   
  }
});
