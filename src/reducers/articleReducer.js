import {DO_LOADING, GET_ARTICLES} from '../actions/actionType'


export const initState = {
    article: [],
    loading: false
}

const articleReducer = (state = initState, action)=>{

    switch (action.type){
        case GET_ARTICLES : return {...state, articles: action.payload}
        case DO_LOADING : return {...state, loading: action.status};
        default : return state
    }
}

export default articleReducer