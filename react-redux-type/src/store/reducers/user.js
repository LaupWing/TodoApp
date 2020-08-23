import * as actionTypes from '../actionTypes';

const initialState = {
    user: null,
    error: null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER: return {
            ...state,
            user: action.user
        }
        case actionTypes.SET_USER_ERROR: return {
            ...state,
            error: action.error
        }
        default: return state;
    }
}

export default reducer;