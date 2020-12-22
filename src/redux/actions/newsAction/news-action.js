import axios from 'axios';

export const OPEN = "NEWS_ALERT_MODAL/OPEN";
export const CLOSE = "NEWS_ALERT_MODAL/CLOSE";
export const NEXT_PAGE = "NEWS_ALERT_MODAL/NEXT_PAGE";
export const GET_NEWS = "NEWS_ALERT_MODAL/GET_NEWS";
export const PREV_PAGE = "NEWS_ALERT_MODAL/PREV_PAGE";

export const close = () => ({
    type: CLOSE
});

export const open = (post) => ({
    type: OPEN,
    post
})


export const getNews = () => (dispatch, getState) => {
    const baseUrl = 'https://bilim-blog.herokuapp.com/blog/post/';
    axios.get(baseUrl)
        .then(respons => {
                const news = respons.data;
                dispatch({
                    type: GET_NEWS,
                    news
                })
            }
        )
}


export const nextPage = () =>({
    type: NEXT_PAGE
})

export const prevPage = () =>({
    type: PREV_PAGE
})