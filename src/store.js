import { configureStore } from "redux-starter-kit";
import { myreducer } from "./reducer";

export const store = configureStore({ reducer: myreducer });
