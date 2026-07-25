import React from 'react'
import { Navigate } from 'react-router-dom';
// import Login from "../../auth/pages/Loing"

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("login_jwtscwertcode")
      console.log("Token:", token);
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children
}

export default ProtectedRoute
