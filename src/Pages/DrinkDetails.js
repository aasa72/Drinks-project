import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DrinkDetails = () => {
const { drinksID } = useParams()
const [ details, setDetails ] = useState([])

useEffect (() => {
  fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksID}`)
  .then ((res) => res.json())
  .then ((json) => {
    setDetails(json.drinks)
  })
}, [drinksID])

  return (
    <div>
      {details.map((detail) => (
        <div key={detail.idDrink}>
          <h1>{detail.strDrink}</h1>
          <p>{detail.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}