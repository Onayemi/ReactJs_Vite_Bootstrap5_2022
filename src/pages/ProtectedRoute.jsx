import React from 'react'
import { Navigate } from 'react-router-dom'
// import {useAuth} from '@auth...' // fetch also from localstorage

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user') //false
  // const {user } = useAuth();
  if(!user){
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute