/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { getAuth } from "firebase/auth"; //from firebase 1st kaj
import app from '../firebase/firebase.config'; //2nd kaj eita

export const AuthContext = createContext(null); //this is for use in other jsx file to share data.

const auth = getAuth(app); //+eita(2nd)





const AuthProvider = ({children}) => {
const user = {displayName: 'awolad'}
const authInfo = {
    user,


}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;