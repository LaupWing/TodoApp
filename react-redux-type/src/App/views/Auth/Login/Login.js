import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

const Login = ({toggle, error, onLogin}) => {
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        onLogin(email, password);
    }

    return (
        <form className="login_form" onSubmit={handleSubmit}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>No account? Sign up here!</p>
        </form>
    );
}

const mapStateToError = state =>{
    return{
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onLogin: ()=>dispatch(actions.loginUser)
    }
}

export default connect(mapStateToError, mapDispatchToProps)(Login);