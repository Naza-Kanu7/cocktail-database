import React from 'react'
import './Cocktail.css'
import { Link } from 'react-router-dom'

function Cocktail({drink}) {
    const {strDrink, idDrink, strGlass, strAlcoholic, strDrinkThumb} = drink
  return (
    <div className='cocktail-container' key={idDrink}>
        <div>
            <img src={strDrinkThumb} />
        </div>
        <div className='details-container'>
            <h1>{strDrink}</h1>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <button><Link to={`/details/${idDrink}`}>Details</Link></button>
            {/* <button><Link to='/details'>Details</Link></button> */}
        </div>
    </div>
  )
}

export default Cocktail

{/* <div key={idDrink}>
    <h1>{strDrink}</h1>
    <p>{strAlcoholic}</p>
    <p>{strGlass}</p>
    <img src={strDrinkThumb} />
</div> */}
// const {id, name, email} = monster;