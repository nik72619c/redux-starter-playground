import { createAction } from "redux-starter-kit";

export function makeAction() {
  let myactionType = createAction("reducer");
  let myaction = myactionType(5); //sending the payload here
  console.log(myaction);
  return myaction;
}
