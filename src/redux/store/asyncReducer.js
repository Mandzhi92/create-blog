import Services from "../../services/Services";
import { getArticles, throwError, getTotalPages, toggleLoad, getSingleArticle } from "../actions/apiActions";
import { GET_ARTICLES, GET_CURRENT_PAGE, GET_ERROR, GET_TOTAL_PAGES, TOGGLE_LOAD, GET_ONE_ARTICLE } from "../actions/actionTypes";
const blogService = new Services();


const initialState = {
    articles: [],
    totalPages: 0,
    currentPage: 1,
    token: null,
    isLoad: true,
    error: {},
    currentArticle: {body: null},
}


export const getAllArticles = (page) => (dispatch) => {
    blogService
      .getArticles(page)
      .then((res) => {
        dispatch(getArticles(res.articles))
        dispatch(getTotalPages(res.articlesCount))
        dispatch(toggleLoad(false))
      })
      .catch((e) => {
        dispatch(toggleLoad(false))
        dispatch(throwError(JSON.parse(e.message)))
      })
}

export const getOneArticle = (id) => (dispatch) => {
    // console.log(id)
    if(id) {
        blogService
            .getArticle(id)
            // .then(res => console.log(res))
            .then(res => dispatch(getSingleArticle(res.article)))
            .catch(e => dispatch(throwError(e.message)))
    } 
    
    dispatch(getSingleArticle({body: null}))
}

const asyncReducer = (state = initialState, {type, payload} = {}) => {
    switch(type){
        case GET_ARTICLES:
            return {...state, articles:[...payload]}
        case GET_ERROR:
            return { ...state, error: payload }
        case GET_CURRENT_PAGE:
            return {...state, currentPage: payload}
        case GET_TOTAL_PAGES:
            return {...state, totalPages: payload}
        case TOGGLE_LOAD:
            return {...state, isLoad: payload}
        case GET_ONE_ARTICLE:
            return {...state, currentArticle: payload}
        default:
            return state
    }
}

export default asyncReducer;