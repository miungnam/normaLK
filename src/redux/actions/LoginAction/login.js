import * as axios from "axios";
import {USER_TOKEN_KEY} from "../../constant/storage_key";
import {history} from "../../../index";

export const LOGIN_CHANGE_FIELD = "LOGIN_CHANGE_FIELD/";
export const USERNAME_FILED = "USERNAME_FILED";
export const PASSWORD_FIELD = "PASSWORD_FIELD";
export const LOGIN_REQUEST_FAILED = "LOGIN_PAGE/LOGIN_REQUEST_FAILED";
export const FAILED_VALIDATION = "LOGIN_PAGE/FAILED_VALIDATION";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_PAGE/LOGIN_REQUEST_SUCCESS";
export const CLEAR_ERRORS = "LOGIN_PAGE/CLEAR_ERRORS";
export const LOGOUT = "LOGIN_PAGE/LOGOUT";


export const FIELDS = {
    login: LOGIN_CHANGE_FIELD + USERNAME_FILED,
    password: LOGIN_CHANGE_FIELD + PASSWORD_FIELD
};

export function changeField(field, value) {
    return {
        type: FIELDS[field],
        value
    };
}

export const changeLoginField = (name, value) => dispatch => {
    dispatch(changeField(name, value))
};

export const validateLogin = (email, password) => {
    let emailError = "";
    let passwordError = "";
    if (!email)
        emailError = "Enter Email!";
    if (!password)
        passwordError = "Enter password!";
    return {
        emailError,
        passwordError
    }
};

export const login = () => (dispatch, getState) => {
    dispatch({type: CLEAR_ERRORS});
    const {email, password} = getState().login;

    const {emailError, passwordError} = validateLogin(email, password);
    const baseURL = 'https://unnamed-project-999.herokuapp.com/api/auth/users/login/'

    if (!emailError && !passwordError) {
        axios.post(baseURL, {
            email: email,
            password: password
        })
            .then(result => {
                const {token} = result.data;
                dispatch({ type: LOGIN_REQUEST_SUCCESS, token });
                localStorage.setItem(USER_TOKEN_KEY, token);
                history.push('/main');
            }).catch(({response}) => {
            dispatch({type: LOGIN_REQUEST_FAILED, error: response.data});
        });
    } else {
        dispatch({type: FAILED_VALIDATION, emailError, passwordError});
    }
};


export const logout = () =>(dispatch) =>{
    localStorage.removeItem(USER_TOKEN_KEY);
    history.push("/login");
    dispatch({type: LOGOUT})
};