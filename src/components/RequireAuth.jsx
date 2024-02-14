import {useLocation, Navigate, Outlet} from 'react-router-dom'
import {useAuth} from '../contexts/AuthProvider'

const RequireAuth = () => {
    const {authenticatedUser} = useAuth()
    const location = useLocation()

    return authenticatedUser.email ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
    // return <h1>Hello</h1>
}
export default RequireAuth