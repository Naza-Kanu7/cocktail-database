import React from 'react'
import './Details.css'
import sample from './sample.jpg'
import { Link, useParams } from 'react-router-dom'



function Details({drinks}) {
    // console.log(drinks)
    const {drinkId} = useParams()
    const thisCocktail = drinks.find(cocktail => cocktail.idDrink === drinkId)
    // console.log(thisCocktail)
  return (
    <div className='details-container'>
        <div className='heading'>
            <button><Link to='/'>Back Home</Link></button>
            <br />
            <h1>{thisCocktail.strDrink}</h1>
        </div>
        <div className='details-flex'>
            <div className='image-container'>
                <img className='details-image' src={thisCocktail.strDrinkThumb} />
            </div>
            <div className='details'>
                <h3><span>Name: </span> {thisCocktail.strDrink}</h3>
                <h3><span>Category: </span> {thisCocktail.strCategory}</h3>
                <h3><span>Info: </span> {thisCocktail.strAlcoholic}</h3>
                <h3><span>Glass: </span> {thisCocktail.strGlass}</h3>
                <h3><span>Instructions: </span> {thisCocktail.strInstructions}</h3>
                <h3><span>Ingredients: </span> {thisCocktail.strIngredient1}, {thisCocktail.strIngredient2}, {thisCocktail.strIngredient3}, {thisCocktail.strIngredient4}</h3>
            </div>
        </div>
    </div>
  )
}

export default Details