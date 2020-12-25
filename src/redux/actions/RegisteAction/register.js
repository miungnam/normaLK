import * as axios from "axios";
import {USER_TOKEN_KEY} from "../../constant/storage_key";
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export const REGISTER_CHANGE_FIELD = "REGISTER_CHANGE_FIELD/";
export const USERNAME_FILED = "USERNAME_FILED";
export const PASSWORD_FIELD = "PASSWORD_FIELD";
export const LAST_NAME = "PASSWORD_FIELD";
export const LOGIN_REQUEST_FAILED = "REGISTER_PAGE/LOGIN_REQUEST_FAILED";
export const FAILED_VALIDATION = "REGISTER_PAGE/FAILED_VALIDATION";
export const LOGIN_REQUEST_SUCCESS = "REGISTER_PAGE/LOGIN_REQUEST_SUCCESS";
export const CLEAR_ERRORS = "REGISTER_PAGE/CLEAR_ERRORS";
export const LOGOUT = "REGISTER_PAGE/LOGOUT";


export const FIELDS = {
    last_name: REGISTER_CHANGE_FIELD + LAST_NAME,
    login: REGISTER_CHANGE_FIELD + USERNAME_FILED,
    password: REGISTER_CHANGE_FIELD + PASSWORD_FIELD
};

export function changeField(field, value) {
    return {
        type: FIELDS[field],
        value
    };
}

export const changeRegisterField = (name, value) => dispatch => {
    dispatch(changeField(name, value))
};

export const validateLogin = ( email, password, password2) => {
    let emailError = "";
    let last_name = "";
    let passwordError = "";
    if (!email)
        emailError = "Enter Email!";
    if (!last_name)
        emailError = "Enter Email!";
    if (!last_name)
        passwordError = "Enter password!";
    return {
        emailError,
        passwordError
    }
};

export const register = () => (dispatch, getState) => {
    dispatch({type: CLEAR_ERRORS});
    const {email, password, last_name} = getState().register;

    const {emailError, passwordError} = validateLogin(email, password, last_name);
    const baseURL = 'https://unnamed-project-999.herokuapp.com/api/auth/users/login/'

    if (!emailError && !passwordError && last_name) {
        axios.post(baseURL, {
            email: email,
            last_name,
            password: password
        })
            .then(result => {
                const {token} = result.data;
                dispatch({ type: LOGIN_REQUEST_SUCCESS, token });
                localStorage.setItem(USER_TOKEN_KEY, token);
                window.location.href("/main")
            }).catch(({response}) => {
            dispatch({type: LOGIN_REQUEST_FAILED, error: response.data});
        });
    } else {
        dispatch({type: FAILED_VALIDATION, emailError, passwordError});
    }
};


