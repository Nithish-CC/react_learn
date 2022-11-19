import { combineReducers } from "redux";
import { counterReducer } from "../Reducer/counterReducer";

export const rootReducer = combineReducers({ userBalance: counterReducer });

// export { rootReducer };

// {
// 	userBalance: counterReducer;
// }
