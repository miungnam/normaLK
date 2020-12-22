import {merge} from 'extend-merge';
import createReducer from "../utils/base";
import {
    CLEAR_ERRORS,
    FAILED_VALIDATION,
    LOGIN_CHANGE_FIELD,
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS, PASSWORD_FIELD,
    USERNAME_FILED,
} from '../../actions/LoginAction/login'

const INITIAL_STATE = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    token: "",
    isError: false
};

export default createReducer(
    {
        [LOGIN_CHANGE_FIELD + USERNAME_FILED]: (state, action) => merge({}, state, {
            email: action.value
        }),
        [LOGIN_CHANGE_FIELD + PASSWORD_FIELD]: (state, action) => merge({}, state, {
            password: action.value
        }),

        [LOGIN_REQUEST_SUCCESS]: (state, action) => merge({}, state, {
            token: action.token
        }),
        [LOGIN_REQUEST_FAILED]: (state, action) => merge({}, state, {
            errorMessage: action.error,
            isError: true
        }),
        [FAILED_VALIDATION]: (state, action) => merge({}, state, {
            emailError: action.emailError,
            passwordError: action.passwordError
        }),

        [CLEAR_ERRORS]: (state, action) => merge({}, state, {
            usernameError: "",
            passwordError: "",
            isError: false
        }),

    }, INITIAL_STATE);