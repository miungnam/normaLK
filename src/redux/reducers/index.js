import { combineReducers } from "redux";
import news from './news/news'
import notifyReducer from 'react-redux-notify';
import login from './Login/login';

export default combineReducers({
    notifyReducer,
    news,
    login,
});