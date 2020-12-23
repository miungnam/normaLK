import { combineReducers } from 'redux'
import notifyReducer from 'react-redux-notify'
import login from './Login/login'
import register from './Register/Register'

export default combineReducers({
	notifyReducer,
	login,
	register
})

