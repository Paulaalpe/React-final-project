import React from 'react'
import CountDown from './CountDown/CountDown'

const Home = () => {
  return (
    <>
      <h1>¡Hola!</h1>
      <h2>Bootcamp FullStack (Septiembre 2021)</h2>
      <p>Ya no queda nada, Upgraders! celebramos en...</p>
      <p>Cuenta Atrás</p>
      <p>¿Te animas? Accede a tu cuenta y apúntate a celebrar</p>
      <CountDown />

    </>
  )
}

export default Home