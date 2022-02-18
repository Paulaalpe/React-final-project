import React, { useState } from 'react'
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import AuthRoute from '../AuthRoute/AuthRoute';
import { RequestProvider } from './../../context/RequestsContext';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Drinks = React.lazy(() => import('../../pages/Drinks/Drinks'));
const Account = React.lazy(() => import('../../pages/Account/Account'));
const Login = React.lazy(()=> import('../Login/Login') );

const userArray = [
    {email: 'alumno@upgrade.com', password: '1234', name: 'Alumno'},
    {email: 'pau@upgrade.com', password: '1234', name: 'Pau'},
    {email: 'mario@upgrade.com', password: '1234', name: 'Mario'}
  ]

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState('');
  
    const loginUser = (formData, prevRoute) => {
      const existsUser = userArray.find(el => el.password === formData.password && el.email === formData.email);
    
      if (existsUser) {
        setUser(existsUser);
        setLoginError('');
        navigate(prevRoute || '/');
      } else {
        setUser(false);
        setLoginError('Ups! El usuario no existe o la contraseña no es correcta');
      }
    };
  
    const logoutUser = () => {
      setUser(null);
    };

  return (
    <div className="header">
    <nav>
      <Link to="/">
        <button>Inicio</button>
      </Link>

      {user ?
      <>
        <Link to="/bebidas">
          <button>Bebidas</button>
        </Link>
        <Link to="/mi-cuenta">
          <button>Mi Cuenta</button>
        </Link>
        <button onClick={logoutUser}>Cerrar sesión</button>
        </> :
        <Link to="/acceder">
          <button>Acceder</button>
        </Link>
      }
    </nav>
    <main>
    < RequestProvider>
      <Routes>
        <Route 
          path="/" 
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <Home />
            </React.Suspense>
          } 
        />
        <Route 
          path="/bebidas" 
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <Drinks />
            </React.Suspense>
          } 
        />
        <Route 
          path="/mi-cuenta" 
          element={
            <AuthRoute user={user} component=
              {
                <React.Suspense fallback={<>Cargando...</>}>
                  <Account user={user}/>
                </React.Suspense>
              }   
            />
          }
        />
        <Route 
          path="/acceder" 
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <Login loginUser={loginUser} loginError={loginError} />
            </React.Suspense>
          } 
        />
        <Route 
          path="*" 
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <p>404 -Oh! La página que buscas no existe</p>
            </React.Suspense>
          } 
        />
      </Routes>
      </RequestProvider>
    </main>
   
  

</div>
);
}

export default Header