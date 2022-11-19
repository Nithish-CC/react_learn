import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./Reducer/rootReducer";

export const Store = createStore(rootReducer, composeWithDevTools());
