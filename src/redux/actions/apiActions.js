import { 
    GET_ARTICLES, 
    GET_ERROR, 
    GET_CURRENT_PAGE, 
    GET_TOTAL_PAGES, 
    TOGGLE_LOAD, 
    GET_ONE_ARTICLE 
} from "./actionTypes"

export const getArticles = (arr) => ({ type: GET_ARTICLES, payload: arr })
export const throwError = (error) => ({ type: GET_ERROR, payload: error })
export const getCurrentPage = (page) => ({type: GET_CURRENT_PAGE, payload: page})
export const getTotalPages = (total) => ({type: GET_TOTAL_PAGES, payload: total})
export const toggleLoad = (isLoad) => ({type: TOGGLE_LOAD, payload: isLoad})
export const getSingleArticle = (article) => ({type: GET_ONE_ARTICLE, payload: article})