import React, { useContext, useState } from 'react';
import Cocktails from '../../components/Cocktails/Cocktails';
import { DrinksDB } from '../../DrinksDB/DrinksDB';
import { RequestContext } from './../../context/RequestsContext';

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
        <h1>Planes</h1>
        <h2>Bebidas</h2>
        <ul>
            {items.map(item => {
                
                return (
                    <li key={item.id}>
                        {item.name} 
                            <button onClick={() => handleAddItem(item)}
                                >Añadir
                            </button>
                    </li>
                )
            })}
        </ul>
        <Cocktails />
    </div>
  )
}

export default Plans