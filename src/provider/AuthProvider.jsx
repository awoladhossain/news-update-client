/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"; //from firebase 1st kaj
import app from '../firebase/firebase.config'; //2nd kaj eita

export const AuthContext = createContext(null); //this is for use in other jsx file to share data.
const auth = getAuth(app); //+eita(2nd)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);


    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const singInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth , loggedUser =>{
            // console.log('state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

const authInfo = {
    user,
    createUser,
    singInUser,
    logOut,
    loading,
    

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;