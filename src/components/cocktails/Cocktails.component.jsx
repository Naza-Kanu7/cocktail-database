import React from 'react'
import './Cocktails.css'
import Cocktail from '../cocktail/Cocktail.component'

function Cocktails({drinks}) {

  return (
    <div className='cocktails-container' >
      <h1 className='title'>Cocktails</h1>
      <div className='cocktails'>
          {drinks.map((drink) => {
              return(
                  <Cocktail drink={drink} />
              )
          })}
      </div>
    </div>
  )
}

export default Cocktails