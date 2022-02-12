import React from 'react'

const Account = ({user}) => {
    const { email, password, name } = user || {};
  return (
    <>
        <h1>Account</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Name: {name}</p>
    </>
  )
}

export default Account