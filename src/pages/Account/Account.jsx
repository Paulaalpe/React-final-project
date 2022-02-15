import React, { useContext, useState} from 'react';
import { RContext } from './../../context/RequestsContext';

const Account = ({user}) => {
    const { email, password, name } = user || {};
    const [showPlans, setShowPlans] = useState(false);  
    const {planItems } = useContext(RContext);

    const handleShowPlans = (()=> {
        setShowPlans(!showPlans);
    })

    // const [showRequests, setShowRequests] = useState(false);

    // const handleShowRequests = () => {
    //   setShowRequests(!showRequests);
    // }
  return (
    <>
        <h1>Tu cuenta, {name}</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Name: {name}</p>

        <button onClick={handleShowPlans}>Ver mis Planes</button>
        {showPlans ? 
            <> 
                Estos son los planes que has elegido:
                <ul>
                     {planItems.map(item => (<li key={item.id}>{item.name ?? item.strDrink} </li>))}
                </ul>
            </> 
            : null}
    </>
  )
}

export default Account