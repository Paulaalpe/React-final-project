// import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({user, component, ...restProps }) => {
    if (!component) throw new Error('Necesitas añadir una prop component');

    if (user) {
        return component
    } else {
        return <Navigate to="/acceder" state={{prevRoute: window.location.pathname}} />
    }
};

export default AuthRoute