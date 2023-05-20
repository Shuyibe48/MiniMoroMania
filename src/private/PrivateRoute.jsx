import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (user) {
        return children
    }

    if (loading) {
        return <div className='py-36 text-center'>
            <RotateLoader color="#36d7b7" />
        </div>
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;