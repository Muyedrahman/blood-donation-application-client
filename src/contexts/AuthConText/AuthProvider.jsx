import React from 'react';
import { AuthConText } from './AuthConText';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUser,
        signInUser
    }


    return (
       <AuthConText value={authInfo}>
        {children}
       </AuthConText>
    );
};

export default AuthProvider;