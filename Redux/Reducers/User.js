// Redux userReducer

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionTypes/User";

const initState = {
    user: null,
    loadUser: false,
    errors: [],
    isAuth: false
};

const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loadUser: true, errors: [] }; // Clear errors when loading user data
        case SUCC_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, loadUser: false, user: payload.user, isAuth: true, errors: [] }; // Clear errors on success
            
        case CURRENT_USER:
            return { ...state, loadUser: false, user: payload.user.token, isAuth: true, errors: [] }; // Clear errors on current user action success
 
        case FAIL_USER:
            return { ...state, loadUser: false, errors: payload, user: null, isAuth: false }; // Set errors correctly
                
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: null, loadUser: false, errors: [], isAuth: false };

        default:
            return state;
    }
};

export default userReducer;
