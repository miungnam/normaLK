import {merge} from 'extend-merge';
import createReducer from "../utils/base";
import {OPEN, CLOSE, GET_NEWS, NEXT_PAGE, PREV_PAGE} from "../../actions/newsAction/news-action"

const INITIAL_STATE = {
    isOpen: false,
    selectedPost: {},
    allNews: [],
    news: [],
    currentPage: 0
};


export default createReducer(
    {
        [OPEN]: (state, action) => merge({}, state, {
            isOpen: true,
            selectedPost: action.post
        }),

        [CLOSE]: (state, action) => merge({}, state, {
            isOpen: false
        }),
        [GET_NEWS]: (state, action) => merge({}, state, {
            news: action.news
        }),
        [NEXT_PAGE]: (state, action) => merge({}, state, {
            currentPage: state.currentPage + 1
        }),
        [PREV_PAGE]: (state, action) => merge({}, state, {
            currentPage: state.currentPage - 1
        }),

    }, INITIAL_STATE);