import React, {} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

const Signup = ({toggle, error,createUser}) => {

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirm = e.target.password_confirm.value;
        if(password !== password_confirm){
            alert('Passwords doesnt match');
        }
        createUser(email,password);
    }
    return (
        <form className="signup_form" onSubmit={handleSubmit}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <input name='password_confirm' type="password" placeholder="Confirm your Password..."/>
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>Already hava account? Login here!</p>
        </form>
    );
}

const mapStateToProps = state =>{
    return {
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        createUser :()=> dispatch(actions.userAuthState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
