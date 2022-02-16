import React, { useContext, useState} from 'react';
import { RequestContext } from '../../context/RequestsContext';


const Account = ({user}) => {
    const { email, password, name } = user || {};
    const [showPlans, setShowPlans] = useState(false);
    // const [showButton, setShowButton] = useState(false); 
     
    const {planItems } = useContext(RequestContext);

    const handleShowPlans = (()=> {
        setShowPlans(!showPlans);
    })

  //   const handleShowButton = (()=> {
  //     setShowButton(!showButton);
  // })

    const deleteItem = (item) => {
      if (item.count > 0) {
          item.count -=1
      } else {
        console.log(item)
      }
    }
    

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
                     {planItems.map((item, index) => (<li key={index}>
                        {item.name ?? item.strDrink} 
                        ({item.count}) 
                        {/* <button onClick={() => deleteItem(item, index)}>Remove</button> */}
                        <button onClick={() => deleteItem(item)}>Remove</button>
                        </li>))}
                </ul>
            </> 
            : null}
    </>
  )
}

export default Account