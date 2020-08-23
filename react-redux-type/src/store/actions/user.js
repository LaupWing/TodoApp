import firebase from 'firebase';
import * as actionTypes from '../actionTypes';

export const userAuthState = ()=>{
    return dispatch =>{
        firebase.auth().onAuthStateChanged(user=>{
            console.log(user);
            dispatch({
                type: actionTypes.SET_USER,
                user
            });
        })
    }
}

export const createUser = ({email,password})=>{
    return async dispatch =>{
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }catch(e){
            dispatch({
                type: actionTypes.SET_USER_ERROR,
                error: e.message
            })
        }
    } 
}

export const loginUser = ({email,password})=>{
    return async dispatch =>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }catch(e){
            dispatch({
                type: actionTypes.SET_USER_ERROR,
                error: e.message
            })
        }
    } 
}