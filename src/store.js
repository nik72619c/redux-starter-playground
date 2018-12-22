import { configureStore } from "redux-starter-kit";
import { myreducer } from "./reducer";

export var store = configureStore({ reducer: myreducer });
