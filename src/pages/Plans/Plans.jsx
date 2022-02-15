import React, { useContext, useState } from 'react'
import Cocktails from '../../components/Cocktails/Cocktails';
import { RContext } from './../../context/RequestsContext';

const itemsMock = [
  {
      id: 1,
      name: 'apple'
  },
  {
      id: 2,
      name: 'manzana'
  },
  {
      id: 3,
      name: 'pera'
  },
];





const Plans = () => {
  const [items] = useState(itemsMock);
  const {planItems, setPlanItems} = useContext(RContext);


  return (
    <div>
        <h1>Planes</h1>
        <Cocktails />
        <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>
                        {item.name} 
                            <button onClick={()=> {
                                setPlanItems([...planItems, item])
                                console.log('Añadido');}}
                                >Añadir
                            </button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Plans