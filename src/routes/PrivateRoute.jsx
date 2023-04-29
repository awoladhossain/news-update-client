/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading)
    {
        return  <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }

    if(user)
    {
        return children;
    }
    return <Navigate to ='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;

/**
 * 1.check user login or not 
 * 2.if user is logged in , then allow them to visit the route
 * 3.else redirect the user to login page
 * 4.setup the private router 
 * 5.handle loading 
 * 
 */