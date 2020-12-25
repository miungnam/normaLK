import * as axios from "axios";
import {USER_TOKEN_KEY} from "../../constant/storage_key";
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export const REGISTER_CHANGE_FIELD = "REGISTER_CHANGE_FIELD/";
export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME_FILED";
export const EMAIL = "EMAIL_FILED";
export const USERNAME = "USERNAME_FILED";
export const BIRTHDAY = "BIRTHDAY_FILED";
export const GENDER = "GENDER_FILED";
export const PHONE = "PHONE_FILED";
export const ADDRESS = "ADDRESS_FILED";
export const COUNTRY = "COUNTRY_FILED";
export const CITY = "CITY_FILED";
export const STATE = "STATE_FILED";
export const PASSWORD = "PASSWORD_FIELD";
export const PASSWORD2 = "PASSWORD2_FIELD";
export const REGISTER_REQUEST_FAILED = "REGISTER_PAGE/REGISTER_REQUEST_FAILED";
export const FAILED_VALIDATION = "REGISTER_PAGE/FAILED_VALIDATION";
export const REGISTER_REQUEST_SUCCESS = "REGISTER_PAGE/REGISTER_REQUEST_SUCCESS";
export const CLEAR_ERRORS = "REGISTER_PAGE/CLEAR_ERRORS";


export const FIELDS = {
    first_name: REGISTER_CHANGE_FIELD + FIRST_NAME,
    last_name: REGISTER_CHANGE_FIELD + LAST_NAME,
    email: REGISTER_CHANGE_FIELD + EMAIL,
    username: REGISTER_CHANGE_FIELD + USERNAME,
    birthday: REGISTER_CHANGE_FIELD + BIRTHDAY,
    gender: REGISTER_CHANGE_FIELD + GENDER,
    phone: REGISTER_CHANGE_FIELD + PHONE,
    address: REGISTER_CHANGE_FIELD + ADDRESS,
    country: REGISTER_CHANGE_FIELD + COUNTRY,
    city: REGISTER_CHANGE_FIELD + CITY,
    state: REGISTER_CHANGE_FIELD + STATE,
    password: REGISTER_CHANGE_FIELD + PASSWORD,
    password2: REGISTER_CHANGE_FIELD + PASSWORD2
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

export const validateLogin = (first_name, last_name, email, username, birthday, gender, phone, address,
                              country, city, state, password, password2) => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let usernameError = "";
    let birthdayError = "";
    let genderError = "";
    let phoneError = "";
    let addressError = "";
    let countryError = "";
    let cityError = "";
    let stateError = "";
    let password2Error = "";
    let passwordError = "";
    if (!first_name)
        firstNameError = "Enter first_name!";
    if (!last_name)
        lastNameError = "Enter Last name!";
    if (!email)
        emailError = "Enter Email!";
    if (!username)
        usernameError = "Enter username!";
    if (!birthday)
        birthdayError = "Enter birthday!";
    if (!gender)
        genderError = "Enter gender!";
    if (!phone)
        phoneError = "Enter phone!";
    if (!address)
        addressError = "Enter address!";
    if (!country)
        countryError = "Enter country!";
    if (!city)
        cityError = "Enter city!";
    if (!state)
        stateError = "Enter State!";
    if (!password)
        passwordError = "Enter password!";
    if (!password2)
        password2Error = "Enter password2!";
    return {
        firstNameError,
        lastNameError,
        emailError,
        usernameError,
        birthdayError,
        genderError,
        phoneError,
        addressError,
        countryError,
        cityError,
        stateError,
        passwordError,
        password2Error
    }
};

export const register = () => (dispatch, getState) => {
    dispatch({type: CLEAR_ERRORS});
    const {
        first_name, last_name, email, username, birthday, gender, phone, address,
        country, city, state, password, password2
    } = getState().register;

    const {
        firstNameError, lastNameError, emailError, usernameError, birthdayError, genderError,
        phoneError, addressError, countryError, cityError, stateError,
        passwordError, password2Error
    } = validateLogin(first_name, last_name, email, username, birthday, gender, phone,
        address, country, city, state,
        password, password2);
    const baseURL = 'https://unnamed-project-999.herokuapp.com/api/auth/users/registration/'

    if (!firstNameError && !lastNameError && !emailError && !usernameError && !birthdayError && !genderError &&
        !phoneError && !addressError && !countryError && !cityError && !stateError &&
        !passwordError && !password2Error) {
        axios.post(baseURL, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            birthday: birthday,
            gender: gender,
            phone: phone,
            address: address,
            country: country,
            city: city,
            state: state,
            password: password,
            password2: password2
        })
            .then(result => {
                const {token} = result.data;
                dispatch({type: REGISTER_REQUEST_SUCCESS, token});
                localStorage.setItem(USER_TOKEN_KEY, token);
                window.location.href("/main")
                console.log(result)
            }).catch(({response}) => {
            dispatch({type: REGISTER_REQUEST_FAILED, error: response.data});
            console.log(response);
        });
    } else {
        dispatch({type: FAILED_VALIDATION, emailError, passwordError});
    }
};


