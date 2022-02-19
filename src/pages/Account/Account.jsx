import React, { useContext, useState} from 'react';
import { RequestContext } from '../../context/RequestsContext';

import './Account.scss';

const Account = ({user}) => {
    const { email, password, name } = user || {};
    const [showPlans, setShowPlans] = useState(false);
      
    const {planItems, setPlanItems } = useContext(RequestContext);

    const handleShowPlans = (()=> {
        setShowPlans(!showPlans);
    })

    const deleteItem = (index) => {
      const newPlanItems = [...planItems];

      if (newPlanItems[index].count >0) {
        newPlanItems[index].count -=1
        setPlanItems(newPlanItems)
      } 
    }
    

  return (
    <div className='Account'>
        <h1>Tu cuenta, {name}</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Name: {name}</p>
        <p className='Disclaimer'>Recuerda que para reservar tienes que visitar la sección bebidas y elegir. Todas las que reserves y no seas capaz de beberte te las cobraremos con clases de refuerzo</p>

        <button className='ButtonShow' onClick={handleShowPlans}>¡Comprueba el cuezo que vas a pillar!</button>
  
        {showPlans ? 
            <div className='TusBebidas'> 
                <h2>Tus bebidas:</h2>
                <div className='TuBebida'>
                <ul>
                     {planItems.map((item, index) => (<li key={index}>
                        {item.name ?? item.strDrink} 
                        ({item.count}) 
                        <button onClick={() => deleteItem(index)}>Eliminar</button>
                        </li>))}
                </ul>
                </div>
            </div> 
            : null}
    </div>
  )
}

export default Account