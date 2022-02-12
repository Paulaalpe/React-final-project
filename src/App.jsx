import React, { useState} from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';

import './App.scss';
import AuthRoute from './pages/AuthRoute/AuthRoute';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Plans = React.lazy(() => import('./pages/Plans/Plans'));
const Account = React.lazy(() => import('./pages/Account/Account'));
const Login = React.lazy(()=> import('./pages/Login/Login') );

const userArray = [
  {email: 'alumno@upgrade.com', password: '1234', name: 'Alumno'},
  {email: 'pau@upgrade.com', password: '1234', name: 'Pau'},
  {email: 'mario@upgrade.com', password: '1234', name: 'Mario'}
]


function App() {
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
    <div className="App">
        <header>
          <Link to="/">
            <button>Inicio</button>
          </Link>

          {user ?
          <>
            <Link to="/planes">
              <button>Planes</button>
            </Link>
            <Link to="/mi-cuenta">
              <button>Mi Cuenta</button>
            </Link>
            <button onClick={logoutUser}>Salir</button>
            </> :
            <Link to="/acceder">
              <button>Acceder</button>
            </Link>
          }

        </header>
        <main>
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
              path="/planes" 
              element={
                <React.Suspense fallback={<>Cargando...</>}>
                  <Plans />
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
                  <p>Oh! La página que buscas no existe</p>
                </React.Suspense>
              } 
            />
          </Routes>
        </main>
       
      

    </div>
  );
}

export default App;
