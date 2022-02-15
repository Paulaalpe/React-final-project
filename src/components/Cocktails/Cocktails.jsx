import React, { useState, useEffect, useContext } from "react";
import { RContext } from './../../context/RequestsContext' 

const Cocktails = () => {
    let [alcoholic, setAlcoholic] = useState([]);
    const {planItems, setPlanItems} = useContext(RContext);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => response.json())
        .then((data) => setAlcoholic(data.drinks))}, []);


  return (
    <div>
        <h2>Cocktails con Alcohol</h2>
        {
            alcoholic.map((item) => {
            return (
            <div key={item.idDrink}>
                <p>{item.strDrink}</p>
                <img src={item.strDrinkThumb} alt={item.strDrink} width="300px" />
                <button onClick={()=>       {                                         
                    setPlanItems([...planItems, item])
                    console.log('Añadido');}}
                    >Añadir
                </button>
            </div>
            );
        })
        }
    </div>
  )
}

export default Cocktails