import axios from "axios";
import { LOAD_USER, CURRENT_USER, FAIL_USER, LOGOUT_USER, SUCC_USER } from "../ActionTypes/User"

export const register = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/User/Register", newUser);
        dispatch({ type: SUCC_USER, payload: result.data })
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
}

export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/User/login", user);
        dispatch({ type: SUCC_USER, payload: result.data })

    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors || [{ msg: 'Failed to log in' }] });
    }
}





export const current = () => async (dispatch) => {
    dispatch({ type: CURRENT_USER });
    try {
        const config = {
            Headers: {
                authorization: localStorage.getItem("token"),
            }
        }
        let result = await axios.get("/api/User/current", config)
        dispatch({ type: CURRENT_USER, payload: result.data })
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors })
    }
}


export const logOut = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    }