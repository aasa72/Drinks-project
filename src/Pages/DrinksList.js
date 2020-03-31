import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'


export const DrinksList = () => {

  const [drink, setDrink] = useState([])

  useEffect (() => {
    fetch ('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then ((res) => res.json())
    .then ((json) => {
      setDrink (json.drinks)
    })
  }, [])


  return (
    <div>
      {drink.map((drinky) => (
        <div key={drinky.idDrink}>
          <img src={drinky.strDrinkThumb} alt="{drinky.strDrink}" />
          <h2>
            <Link to= {`/description/${drinky.idDrink}`}>
             {drinky.strDrink}
            </Link>
          </h2>
          
        </div>
      ))}
    </div>
  )

}