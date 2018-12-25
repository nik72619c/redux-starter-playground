import { createAction } from "redux-starter-kit";

export function makeAction() {
  let myactionType = createAction("reducer");
  let myaction = myactionType(1); //sending the payload here
  console.log(myaction);
  return myaction;
}
