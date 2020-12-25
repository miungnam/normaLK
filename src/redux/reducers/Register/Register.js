import {merge} from 'extend-merge';
import createReducer from "../utils/base";
import {
    FIRST_NAME, LAST_NAME, EMAIL, USERNAME, BIRTHDAY, GENDER, PHONE, ADDRESS,
    COUNTRY, CITY, STATE, PASSWORD, PASSWORD2, REGISTER_CHANGE_FIELD, REGISTER_REQUEST_SUCCESS, REGISTER_REQUEST_FAILED
} from '../../actions/RegisteAction/register'
import {FAILED_VALIDATION} from "../../actions/LoginAction/login";


const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    birthday: "",
    gender: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    state: "",
    password: "",
    password2: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    genderError: "",
    phoneError: "",
    addressError: "",
    countryError: "",
    cityError: "",
    stateError: "",
    passwordError: "",
    password2Error: "",
    token: "",
    isError: false
};

export default createReducer(
    {
        [REGISTER_CHANGE_FIELD + FIRST_NAME]: (state, action) => merge({}, state, {
            first_name: action.value
        }),
        [REGISTER_CHANGE_FIELD + LAST_NAME]: (state, action) => merge({}, state, {
            last_name: action.value
        }),
        [REGISTER_CHANGE_FIELD + EMAIL]: (state, action) => merge({}, state, {
            email: action.value
        }),
        [REGISTER_CHANGE_FIELD + USERNAME]: (state, action) => merge({}, state, {
            username: action.value
        }),
        [REGISTER_CHANGE_FIELD + GENDER]: (state, action) => merge({}, state, {
            gender: action.value
        }),
        [REGISTER_CHANGE_FIELD + BIRTHDAY]: (state, action) => merge({}, state, {
            birthday: action.value
        }),
        [REGISTER_CHANGE_FIELD + PHONE]: (state, action) => merge({}, state, {
            phone: action.value
        }),
        [REGISTER_CHANGE_FIELD + ADDRESS]: (state, action) => merge({}, state, {
            address: action.value
        }),
        [REGISTER_CHANGE_FIELD + COUNTRY]: (state, action) => merge({}, state, {
            country: action.value
        }),
        [REGISTER_CHANGE_FIELD + CITY]: (state, action) => merge({}, state, {
            city: action.value
        }),
        [REGISTER_CHANGE_FIELD + STATE]: (state, action) => merge({}, state, {
            state: action.value
        }),
        [REGISTER_CHANGE_FIELD + PASSWORD]: (state, action) => merge({}, state, {
            password: action.value
        }),
        [REGISTER_CHANGE_FIELD + PASSWORD2]: (state, action) => merge({}, state, {
            password2: action.value
        }),
        [REGISTER_REQUEST_SUCCESS]: (state, action) => merge({}, state, {
            token: action.token
        }),
        [REGISTER_REQUEST_FAILED]: (state, action) => merge({}, state, {
            errorMessage: action.error,
            isError: true
        }),
        [FAILED_VALIDATION]: (state, action) => merge({}, state, {
            firstNameError: action.firstNameError,
            lastNameError: action.lastNameError,
            emailError: action.emailError,
            usernameError: action.usernameError,
            genderError: action.genderError,
            phoneError: action.phoneError,
            addressError: action.addressError,
            countryError: action.countryError,
            cityError: action.cityError,
            stateError: action.stateError,
            passwordError: action.passwordError,
            password2Error: action.password2Error,
        }),
    }, INITIAL_STATE)