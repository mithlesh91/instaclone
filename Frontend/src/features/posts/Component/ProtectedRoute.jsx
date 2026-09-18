import {Navigate,Outlet} from "react-router-dom"
import { useAuth } from "../../auth/Hooks/use.Auth"

const ProtectedRoute = ({children}) => {
    const {user,loading,getmehandle} = useAuth()
    if(loading){
        return <h1>loading...</h1>
    }
    if(!user){
        return <Navigate to="/login" replace />
    }
    return children ? children : <Outlet />
}
export default ProtectedRoute