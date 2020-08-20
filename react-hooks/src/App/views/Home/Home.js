import React from 'react';
import firebase from 'firebase';

const Home = ({history}) => {
    if(!firebase.auth().currentUser){
        history.replace('/auth')
    }
    return (
        <div>
            Home
        </div>
    );
}

export default Home;
