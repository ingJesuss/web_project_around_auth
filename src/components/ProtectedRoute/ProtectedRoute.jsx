import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ isLoggedIn, children }) => 
    isLoggedIn ? children : <Navigate to="/signin" replace />

export default ProtectedRoute