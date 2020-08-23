import firebase from 'firebase';
import * as actionTypes from '../actionTypes';

export const userAuthState = ()=>{
    return dispatch =>{
        firebase.auth().onAuthStateChanged(user=>{
            dispatch({
                type: actionTypes.DELETE_TODO,
                user
            });
        })
    }
}