import {ADD_BOOK} from "../components/actions/types";

export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload]
        default:
            return state;
    }
}