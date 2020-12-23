import { combineReducers } from 'redux'
import notifyReducer from 'react-redux-notify'
import login from './Login/login'

export default combineReducers({
	notifyReducer,
	login
})
