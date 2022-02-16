import React, { useState, useEffect } from "react";

const Cocktails = () => {
    let [alcoholic, setAlcoholic] = useState([]);
   
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((response) => response.json())
        .then((data) => setAlcoholic(data.drinks))}, []);

  return (
    <div>
        <h3>Cocktails con Alcohol</h3>
        {
            alcoholic.map((item) => {
       
            return (
            <div key={item.idDrink}>
                <p>{item.strDrink}</p>
                <img src={item.strDrinkThumb} alt={item.strDrink} width="50px" />
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