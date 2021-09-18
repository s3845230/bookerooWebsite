import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import bookReducer from "./bookReducer";

const allReducers = combineReducers({
    errors: errorReducer,
    books: bookReducer
});

export default allReducers;

