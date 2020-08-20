import React from 'react';
import firebase from 'firebase';

const Home = ({history}) => {
    if(!firebase.auth().currentUser){
        history.replace('/auth')
    }
    console.log(firebase.auth().currentUser)
    return (
        <div>
            Home
        </div>
    );
}

export default Home;
