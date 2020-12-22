import * as axios from "axios";

export const LOGIN_CHANGE_FIELD = "LOGIN_CHANGE_FIELD/";
export const USERNAME_FILED = "USERNAME_FILED";
export const PASSWORD_FIELD = "PASSWORD_FIELD";
export const LOGIN_REQUEST_FAILED = "LOGIN_PAGE/LOGIN_REQUEST_FAILED";
export const FAILED_VALIDATION = "LOGIN_PAGE/FAILED_VALIDATION";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_PAGE/LOGIN_REQUEST_SUCCESS";


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
    const {email, password} = getState().login;

    const {emailError, passwordError} = validateLogin(email, password);
    const baseURL = 'https://unnamed-project-999.herokuapp.com/api/token/'
    if (!emailError && !passwordError) {
        axios.post(baseURL, {
            email: email,
            password: password
        })
            .then(result => {
                const token = result.access;
                dispatch({
                    type: LOGIN_REQUEST_SUCCESS,
                    token,
                });
                console.log(result + '1212');
            }).catch(({response}) => {
            dispatch({type: LOGIN_REQUEST_FAILED, error: response});
            console.log(response)
        });
    } else {
        dispatch({type: FAILED_VALIDATION, emailError, passwordError});
    }
};