import {useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Cookies from 'js-cookie';

const ProtectedRoute =  () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token');
        if (!jwtToken) {
            navigate('/login');
        }
    }, [navigate]);
        return (
        <div>
            <Outlet />  
        </div>
    );
}  

    

export default ProtectedRoute;