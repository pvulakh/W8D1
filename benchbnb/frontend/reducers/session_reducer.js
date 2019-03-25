import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

export const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = {id: action.currentUser.id};
            return Object.assign({}, state, newState);
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return state;
    }
};
