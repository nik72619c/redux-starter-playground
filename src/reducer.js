import { createReducer } from "redux-starter-kit";
import { makeAction } from "./action";
console.log("inside the reducer js file...");
var initialState = { val: 0 };

function caseFunction(state, action) {
  console.log("inside reducer case function");
  let newState = { val: 0 };
  newState.val = 3;
  console.log("state is " + state + "and action is " + action);
  console.log("reducer functioning fine...");

  return newState;
}

export var myreducer = createReducer(initialState, {
  reducer: caseFunction
});
