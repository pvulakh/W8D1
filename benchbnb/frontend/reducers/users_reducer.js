import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const usersReducer = (state = {}, action) => {
    //debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = { [action.currentUser.id]: action.currentUser };
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};