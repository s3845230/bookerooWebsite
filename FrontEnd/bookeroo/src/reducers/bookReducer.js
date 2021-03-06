import { GET_ALL_BOOKS, GET_BOOKS } from "../actions/types";

const initialState = {
    books: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
        return {
            ...state,
            books: action.payload
        };

        case GET_BOOKS:
        return {
            ...state,
            books: action.payload
        };
        
        default:
        return state;
    }
}