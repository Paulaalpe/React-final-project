import React, { useContext, useState } from 'react';
import Cocktails from '../../components/Cocktails/Cocktails';
import { DrinksDB } from '../../DrinksDB/DrinksDB';
import { RequestContext } from '../../context/RequestsContext';
import './Drinks.scss';

const { drinks} = DrinksDB

const Plans = () => {
  const [items] = useState(drinks);
  const {planItems, setPlanItems} = useContext(RequestContext);

  const handleAddItem = (item) => {
      const found = planItems.find(cartItem => cartItem.id === item.id);
        if (!found) {
            const cartItem = {
                ...item,
                count: 1
            }
            setPlanItems([...planItems, cartItem]);
        } else {
            found.count++;
            setPlanItems([...planItems]);
        }
  }


  return (
    <div>
        <h1>Bebidas Disponibles</h1>
        <p> Puedes elegir todas las que quieras</p><p>¡paga UpgradeHub!</p>
        <div className='ListDrinks'>
        <ul>
            {items.map(item => {
                
                return (
                    <li key={item.id}>
                        {item.name} 
                            <button className='ButtonCart' onClick={() => handleAddItem(item)}
                                > ¡ Añadir !
                            </button>
                    </li>
                )
            })}
        </ul>
        </div>
        <h2>Por si quieres inspirarte</h2>
        <Cocktails />
    </div>
  )
}

export default Plans