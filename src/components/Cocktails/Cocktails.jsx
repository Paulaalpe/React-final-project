import React, { useState, useEffect } from "react";
import './Cocktails.scss'

const Cocktails = () => {
    let [alcoholic, setAlcoholic] = useState([]);
   
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => response.json())
        .then((data) => setAlcoholic(data.drinks))}, []);

  return (
    <div className="Cocktails">
        {
            alcoholic.map((item) => {
       
            return (
            <div className="Cocktail" key={item.idDrink}>
                <h3>{item.strDrink}</h3>
                <img src={item.strDrinkThumb} alt={item.strDrink} width="200px" />
                {/* <button onClick={()=> {                                         
                    setPlanItems([...planItems, item])
                    console.log('Añadido');}}
                    >Añadir
                </button> */}
            </div>
            );
        })
        }
    </div>
  )
}

export default Cocktails