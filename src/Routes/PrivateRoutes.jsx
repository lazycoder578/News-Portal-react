import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children
    }
  return <Navigate state={location.pathname} to="/login"/>
 
}
