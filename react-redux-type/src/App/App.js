import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router';
import Home from './views/Home/Home';
import {connect} from 'react-redux';
import Auth from './views/Auth/Auth';
import * as actions from '../store/actions'

function App({onAuthStateUser, user}) {
    useEffect(()=>{
        onAuthStateUser();
    },[onAuthStateUser]);

    return (
        <div className="App">
            {user ? <Redirect to="/"/> : <Redirect to="auth"/> }
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    );
}

const mapDispatchToProps = dispatch=>{
    return {
        onAuthStateUser :()=> dispatch(actions.userAuthState())
    }
}

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
