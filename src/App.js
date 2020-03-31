import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DrinksList } from 'Pages/DrinksList'
import { DrinkDetails } from 'Pages/DrinkDetails'

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path = '/' exact>
        <DrinksList />
      </Route>
      <Route path = '/description/:drinksID'>
        <DrinkDetails />
      </Route>
    </Switch>
    
    </BrowserRouter>
  )
}
