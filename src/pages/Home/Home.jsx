import React from 'react'
import CountDown from '../../components/CountDown/CountDown';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Bootcamp FullStack (Septiembre 2021)</h1>
      <h2>¡Hola Upgrader!</h2>
        <p>¡Ya no queda nada! Celebramos en...</p>
        <CountDown />
      <h3>¿Te animas a la fiesta?</h3>
      <p>Sólo tienes que acceder y reservar tus bebidas</p>
   
    </div>
  )
}

export default Home